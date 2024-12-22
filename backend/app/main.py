from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI(
    title="MedBro Backend",
    description="API для демонстрации работы сервера",
    version="1.0.0",
    swagger_ui_parameters={"displayRequestDuration": True},
)

@app.get("/")
async def root():
    return JSONResponse(content={"message": "Сервер работает!"})

@app.get("/status")
async def status():
    return JSONResponse(content={"status": "OK", "message": "Сервер в отличном состоянии!"})
