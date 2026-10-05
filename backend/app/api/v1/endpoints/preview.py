from fastapi import APIRouter
from fastapi.responses import FileResponse

from engine.audio import save_audio
from engine.tones import generate_tone

router = APIRouter()


@router.post("/preview")
def preview(data: dict):

    audio = generate_tone(
        note=data["root_note"],
        duration=2,
        instrument=data["instrument"],
        volume=data["tone_volume"],
    )

    filename = "preview.wav"

    save_audio(audio, filename)

    return FileResponse(
        path=filename,
        media_type="audio/wav",
        filename="preview.wav",
    )