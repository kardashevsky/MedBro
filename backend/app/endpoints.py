from fastapi import APIRouter, HTTPException
from pipeline import rag_pipeline

router = APIRouter()

@router.post("/query")
async def query_endpoint(data: dict):
    """
    Принимает запрос с текстом и возвращает ответ модели.
    ---
    parameters:
      - name: data
        in: body
        description: JSON с ключом `query`, содержащим текст запроса.
        required: true
        schema:
          type: object
          properties:
            query:
              type: string
              example: "What are common treatments against headache?"
    responses:
      200:
        description: Ответ модели.
        content:
          application/json:
            schema:
              type: object
              properties:
                answer:
                  type: string
                  example: "The common treatments include..."
                context:
                  type: string
                  example: "Relevant context text here..."
      400:
        description: Некорректный запрос.
    """
    query = data.get("query")
    if not query:
        raise HTTPException(status_code=400, detail="Query not provided")
    try:
        answer = rag_pipeline(query, k=5)
        return {"answer": answer, "context": "Relevant context text here"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
