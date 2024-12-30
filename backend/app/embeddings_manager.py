# embeddings_manager.py

import numpy as np
import faiss
import torch
from transformers import AutoTokenizer, AutoModel

from config import EMBEDDINGS_PATH, TEXTS_PATH, FAISS_INDEX_PATH, MODEL_NAME

# Глобальные переменные (загружаются один раз при инициализации модуля)
embeddings = None
texts = None
index = None

# Модель для векторизации запроса (AutoModel)
tokenizer = None
model = None
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")


def load_resources():
    """
    Загружает тексты, эмбеддинги, индекс и инициализирует модель (один раз при старте приложения).
    """

    # 1) Загрузить эмбеддинги
    embeddings = np.load(EMBEDDINGS_PATH)
    print(f"Embeddings loaded: {embeddings.shape}")

    # 2) Загрузить тексты
    with open(TEXTS_PATH, "r", encoding="utf-8") as f:
        texts = [line.strip() for line in f]
    print(f"Texts loaded: {len(texts)}")

    # 3) Загрузить FAISS-индекс
    index = faiss.read_index(FAISS_INDEX_PATH)
    print("FAISS index loaded.")

    # 4) Инициализировать модель AutoModel для получения эмбеддингов
    tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
    model = AutoModel.from_pretrained(MODEL_NAME)
    model.to(device)
    print(f"Модель {MODEL_NAME} загружена и размещена на устройстве: {device}")
    return embeddings, texts, index, tokenizer, model

embeddings, texts, index, tokenizer, model = load_resources()

def get_embedding(text: str):
    """
    Получение эмбеддинга текста с помощью загруженной PyTorch-модели (AutoModel).
    """
    # Предполагается, что load_resources() уже был вызван и tokenizer/model готовы
    tokens = tokenizer(text, return_tensors="pt", truncation=True, padding="max_length", max_length=512)
    tokens = {key: value.to(device) for key, value in tokens.items()}

    with torch.no_grad():
        output = model(**tokens)
    # Среднее по всем токенам в last_hidden_state
    return output.last_hidden_state.mean(dim=1).squeeze().cpu().numpy()
