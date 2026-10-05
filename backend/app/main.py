from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.endpoints.preview import router as preview_router
from app.api.v1.endpoints.generate import router as generate_router

app = FastAPI(
    title="SynChord API",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=False,
)

app.include_router(generate_router)
app.include_router(preview_router)


@app.get("/")
def root():
    return {
        "message": "SynChord Backend Running 🚀"
    }