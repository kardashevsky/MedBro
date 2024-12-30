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
        query_eng = translate_query_with_mistral(query, 'Russian', 'English')
        response = rag_pipeline(query_eng, k=5)
        answer = translate_query_with_mistral(response['answer'], 'English', 'Russian')
        return answer
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
