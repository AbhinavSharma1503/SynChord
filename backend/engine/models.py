from dataclasses import dataclass


@dataclass
class GeneratorRequest:
    # Tempo
    bpm: int

    # Root note
    root_note: str

    # Duration in seconds
    duration: float

    # Tone settings
    instrument: str
    tone_volume: float

    # Click settings
    click_sound: str
    click_volume: float
    accent_volume: float = 1.0

    # Audio quality
    sample_rate: int = 44100