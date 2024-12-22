# main.py

import embeddings_manager
from fastapi import FastAPI

app = FastAPI(
    title="RAG API",
    description="API для обработки запросов через RAG-систему",
    version="1.0.0"
)

def main():
    embeddings_manager.load_resources()

if __name__ == "__main__":
    main()
