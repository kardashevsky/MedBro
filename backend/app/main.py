# main.py

# from embeddings_manager import load_resources, texts
import embeddings_manager
from pipeline import rag_pipeline


def main():
    # 1. Инициализируем все ресурсы (модель, индекс, тексты и т.д.)
    embeddings_manager.load_resources()

    # 2. Пример вызова RAG
    query = "What are the common treatments against headache?"
    print(query)
    result = rag_pipeline(query, k=5)

    print(f"Ответ: {result['answer']}")
    print("\n--- Context used ---")
    print(result['context'])


if __name__ == "__main__":
    main()
