# Используем официальный образ Python
FROM python:3.9-slim

# Установка системных зависимостей
RUN apt-get update && apt-get install -y \
    build-essential \
    && apt-get clean

# Устанавливаем pip, если его нет
RUN python -m ensurepip --upgrade && pip install --upgrade pip

# Указываем рабочую директорию
WORKDIR /app

# Копируем содержимое проекта в контейнер
COPY . /app

# Устанавливаем Python-зависимости
RUN pip install --no-cache-dir -r requirements.txt

# Открываем порт для приложения
EXPOSE 8000

# Запуск приложения с uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
