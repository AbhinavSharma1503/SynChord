
from pydantic import BaseModel


class GenerateRequest(BaseModel):
    bpm: int

    root_note: str

    duration: float

    instrument: str

    tone_volume: float

    click_sound: str

    click_volume: float

    accent_volume: float = 1.0