from engine.models import GeneratorRequest
from engine.tones import generate_tone
from engine.click import generate_click_track
from engine.mixer import create_stereo
from engine.audio import save_audio

class Generator:

    def __init__(self):
        pass

class Generator:

    def __init__(self):
        pass

    def generate(
    self,
    request: GeneratorRequest,
):

        tone = generate_tone(
        note=request.root_note,
        duration=request.duration,
        instrument=request.instrument,
        volume=request.tone_volume,
    )

        click = generate_click_track(
    bpm=request.bpm,
    duration=request.duration,
    click_sound=request.click_sound,
    click_volume=request.click_volume,
    accent_volume=request.accent_volume,
)

        stereo = create_stereo(
        left_channel=click,
        right_channel=tone,
    )

        filename = "output.wav"

        save_audio(
        stereo,
        filename,
        )

        return filename