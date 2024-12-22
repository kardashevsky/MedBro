from fastapi import APIRouter, WebSocket
from app.services.langchain import get_answer

router = APIRouter()

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        try:
            # Получаем запрос от клиента
            data = await websocket.receive_text()
            # Обработка запроса через LangChain
            answer = get_answer(data)
            # Отправляем ответ
            await websocket.send_text(answer)
        except Exception as e:
            await websocket.send_text(f"Ошибка: {str(e)}")
