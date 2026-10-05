from fastapi import APIRouter
from fastapi.responses import FileResponse

from app.schemas.generator import GenerateRequest
from engine.generator import Generator
from engine.models import GeneratorRequest

router = APIRouter()


@router.post("/generate")
def generate(request: GenerateRequest):

    generator_request = GeneratorRequest(
        bpm=request.bpm,
        root_note=request.root_note,
        duration=request.duration,
        instrument=request.instrument,
        tone_volume=request.tone_volume,
        click_sound=request.click_sound,
        click_volume=request.click_volume,
        accent_volume=request.accent_volume,
    )

    generator = Generator()
    filename = generator.generate(generator_request)

    return FileResponse(
        path=filename,
        media_type="audio/wav",
        filename="output.wav",
    )