from generator import Generator
from models import GeneratorRequest

request = GeneratorRequest(
    bpm=120,
    root_note="E",
    duration=10,

    instrument="sine",
    tone_volume=0.8,

    click_sound="woodblock",
    click_volume=0.5,
    accent_volume=1.0,
)

generator = Generator()

filename = generator.generate(request)

print(filename)