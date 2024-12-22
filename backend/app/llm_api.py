# llm_api.py

import requests
from config import API_KEY, MODEL_LLM, BASE_URL, HEADERS, TEMPERATURE, TOP_P, MAX_TOKENS

def generate_answer_with_mistral(prompt: str) -> str:
    """
    Отправляет запрос к Mistral API и возвращает ответ модели.
    """
    if not isinstance(prompt, str):
        raise ValueError(f"Prompt должен быть строкой, получен {type(prompt)}")

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": MODEL_LLM,
        "temperature": TEMPERATURE,
        "top_p": TOP_P,
        "max_tokens": MAX_TOKENS,
        "messages": [{"role": "user", "content": prompt}]
    }

    response = requests.post(BASE_URL, json=payload, headers=headers)
    response.raise_for_status()
    return response.json()["choices"][0]["message"]["content"]
