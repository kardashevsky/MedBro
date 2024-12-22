from langchain.chains import RetrievalQA
from langchain.vectorstores import Chroma
from langchain.embeddings import HuggingFaceEmbeddings
from transformers import pipeline

# Настройка LangChain
embedding_model = HuggingFaceEmbeddings(model_name="cointegrated/rubert-tiny2")
# Замените `all_splits` на ваши данные из notebooks
vectorstore = Chroma.from_documents(documents=all_splits, embedding=embedding_model)
retriever = vectorstore.as_retriever()
llm_pipeline = pipeline("text-generation", model="bigscience/bloomz-560m", max_length=150)
rag_chain = RetrievalQA.from_chain_type(retriever=retriever, llm=llm_pipeline)

def get_answer(query: str) -> str:
    result = rag_chain({"query": query})
    return result["result"]
