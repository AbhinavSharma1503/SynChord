from tones import generate_tone
from click import generate_click_track
from mixer import create_stereo
from audio import save_audio

tone = generate_tone(
    note="E",
    duration=10,
    instrument="sine",
)

click = generate_click_track(
    bpm=120,
    duration=10,
    click_sound="woodblock",
    accent_sound="beep",
)

stereo = create_stereo(
    left_channel=click,
    right_channel=tone,
)

save_audio(
    stereo,
    "output.wav",
)

print("output.wav created!")