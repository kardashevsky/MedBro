from fastapi import FastAPI
from app.api.endpoints import router

app = FastAPI(title="MedBro Backend")

# Подключение маршрутов
app.include_router(router)
