# pipeline.py

import embeddings_manager as em
from retriever import retrieve_texts
from llm_api import generate_answer_with_mistral

def rag_pipeline(query: str, k=5) -> dict:
    """
    RAG-пайплайн:
    1) Получаем эмбеддинг запроса
    2) Ищем релевантные тексты
    3) Формируем prompt и отправляем в LLM
    """

    print(f"Эмбеддинги загружены: {em.embeddings.shape}")

    # 1. Векторизуем запрос
    query_embedding = em.get_embedding(query)

    # 2. Ищем релевантные тексты
    retrieved_texts = retrieve_texts(query_embedding, k)
    context = "\n\n".join([txt for txt, _ in retrieved_texts])

    # 3. Формируем prompt
    prompt = f"Based on the following context, answer the query:\n\n{context}\n\nQuery:\n{query}"

    # 4. Запрос к LLM
    answer = generate_answer_with_mistral(prompt)

    return {"answer": answer, "context": context}
