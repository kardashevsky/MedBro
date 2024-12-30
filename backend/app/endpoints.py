from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from pipeline import rag_pipeline

router = APIRouter()

class QueryRequest(BaseModel):
    query: str

@router.post("/query")
async def query_endpoint(request: QueryRequest):
    query = request.query
    if not query:
        raise HTTPException(status_code=400, detail="Query not provided")
    try:
        response = rag_pipeline(query, k=5)
    #   responseMock = {"answer": "Здесь должен быть текст от раг", "context": "Здесь должен быть контекст от раг"}
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
