import numpy as np
import faiss
import numpy as np
from transformers import AutoTokenizer, AutoModel
import torch
import requests

"""Загружаем эмбеддинги и тексты"""

# Путь к сохранённым данным
embeddings_path = "embeddings.npy"  # Путь к файлу с эмбеддингами
texts_path = "texts.txt"  # Путь к файлу с текстами

# Загрузка эмбеддингов
embeddings = np.load(embeddings_path)
print(f"Эмбеддинги загружены: {embeddings.shape}")

# Загрузка текстов
with open(texts_path, "r", encoding="utf-8") as f:
    texts = [line.strip() for line in f]
print(f"Тексты загружены: {len(texts)}")

# Загрузка индекса с диска
index = faiss.read_index("faiss_index")
print("Индекс загружен.")

# Загрузка предобученной модели и токенизатора
model_name = "sentence-transformers/all-MiniLM-L6-v2"  # Компактная модель для векторизации текстов
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModel.from_pretrained(model_name)

# Перенос модели на устройство (GPU, если доступен)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.to(device)

# Функция для получения эмбеддингов с использованием GPU
def get_embedding(text):
    tokens = tokenizer(text, return_tensors="pt", truncation=True, padding="max_length", max_length=512)
    tokens = {key: value.to(device) for key, value in tokens.items()}  # Перенос данных на устройство
    with torch.no_grad():
        output = model(**tokens)
    return output.last_hidden_state.mean(dim=1).squeeze().cpu().numpy()  # Среднее по токенам

def retrieve_texts(query_embedding, index, texts, k=5):
    distances, indices = index.search(query_embedding.reshape(1, -1), k)
    results = [(texts[idx], distances[0][i]) for i, idx in enumerate(indices[0])]
    return results

# Настройка API
api_key = "4Cs8hBRAzeJjgfAYR6ilpTFOtsTvCqrr"
model_LLM = "mistral-large-latest"
base_url = "https://api.mistral.ai/v1/chat/completions"

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

def generate_answer_with_mistral(prompt):
    payload = {
        "model": model_LLM,
        "temperature": 0.7,
        "top_p": 0.95,
        "max_tokens": 500,
        "messages": [{"role": "user", "content": prompt}]
    }

    response = requests.post(base_url, json=payload, headers=headers)
    response.raise_for_status()
    return response.json()["choices"][0]["message"]["content"]


def generate_answer_with_mistral(prompt):
    if not isinstance(prompt, str):
        raise ValueError(f"Prompt должен быть строкой, получен {type(prompt)}")

    payload = {
        "model": model,
        "temperature": 0.7,
        "top_p": 0.95,
        "max_tokens": 500,
        "messages": [{"role": "user", "content": prompt}]
    }

    response = requests.post(base_url, json=payload, headers=headers)
    response.raise_for_status()  # Вызывает исключение при HTTP-ошибках
    return response.json()["choices"][0]["message"]["content"]

def rag_pipeline(query, index, texts, mistral_api_key, k=5):
    # 1. Поиск релевантных текстов
    query_embedding = get_embedding(query)
    retrieved_texts = retrieve_texts(query_embedding, index, texts, k)
    context = "\n\n".join([text for text, _ in retrieved_texts])

    # 2. Формирование запроса к модели
    prompt = f"Based on the following context, answer the query:\n\n{context}\n\nQuery:\n\n {query}"

    # 3. Генерация ответа
    answer = generate_answer_with_mistral(prompt)

    return {"answer": answer, "context": context}

# Пример использования
query = "What are the latest advancements in cancer treatments?"
result = rag_pipeline(query, index, texts, api_key, k=5)

# Вывод результата
print(f"Ответ: {result['answer']}")