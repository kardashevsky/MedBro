# retriever.py

import numpy as np
import embeddings_manager as em

def retrieve_texts(query_embedding, k=5):
    """
    Поиск k ближайших текстов по FAISS-индексу.
    Возвращает список кортежей (текст, distance).
    """
    # Убедимся, что query_embedding имеет тип float32
    query_embedding = query_embedding.astype(np.float32)

    distances, indices = em.index.search(query_embedding.reshape(1, -1), k)
    results = [(em.texts[idx], distances[0][i]) for i, idx in enumerate(indices[0])]
    return results
