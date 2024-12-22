# config.py

# Пути к сохранённым данным
import os

# Базовая директория
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Пути к сохранённым данным
EMBEDDINGS_PATH = os.path.join(BASE_DIR, "embeddings.npy")
TEXTS_PATH = os.path.join(BASE_DIR, "texts.txt")
FAISS_INDEX_PATH = os.path.join(BASE_DIR, "faiss_index")


# Название модели для векторизации
MODEL_NAME = "sentence-transformers/all-MiniLM-L6-v2"

# Настройка API Mistral
API_KEY = "4Cs8hBRAzeJjgfAYR6ilpTFOtsTvCqrr"
MODEL_LLM = "mistral-large-latest"
BASE_URL = "https://api.mistral.ai/v1/chat/completions"
HEADERS = {
    "Content-Type": "application/json"
}

# Параметры генерации
TEMPERATURE = 0.7
TOP_P = 0.95
MAX_TOKENS = 1000
