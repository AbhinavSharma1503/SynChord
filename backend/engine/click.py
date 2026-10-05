import numpy as np

from engine.constants import SAMPLE_RATE


# ---------------------------------------------------
# Individual Click Sound Generators
# ---------------------------------------------------

def generate_beep(duration=0.03, frequency=1500, volume=0.8):
    """
    Simple sine-wave beep.
    """
    t = np.linspace(
        0,
        duration,
        int(duration * SAMPLE_RATE),
        endpoint=False,
    )

    return volume * np.sin(2 * np.pi * frequency * t)


def generate_woodblock(duration=0.02, volume=0.9):
    """
    Woodblock-like click.
    High-frequency tone with fast exponential decay.
    """

    t = np.linspace(
        0,
        duration,
        int(duration * SAMPLE_RATE),
        endpoint=False,
    )

    decay = np.exp(-40 * t)

    signal = np.sin(2 * np.pi * 2200 * t)

    return volume * signal * decay


def generate_stick(duration=0.015, volume=0.9):
    """
    Stick click using white noise burst.
    """

    samples = int(duration * SAMPLE_RATE)

    noise = np.random.randn(samples)

    decay = np.exp(-70 * np.linspace(0, duration, samples))

    return volume * noise * decay


# ---------------------------------------------------
# Click Registry
# ---------------------------------------------------

CLICK_SOUNDS = {
    "beep": generate_beep,
    "woodblock": generate_woodblock,
    "stick": generate_stick,
}


# ---------------------------------------------------
# Main Generator
# ---------------------------------------------------

def generate_click_track(
    bpm: int,
    duration: float,
    click_sound="woodblock",
    accent_sound="beep",
    click_volume=0.8,
    accent_volume=1.0,
    beats_per_bar=4,
):
    """
    Generates a complete metronome track.

    Parameters
    ----------
    bpm : int

    duration : float

    click_sound : str

    accent_sound : str

    beats_per_bar : int
    """

    total_samples = int(duration * SAMPLE_RATE)

    audio = np.zeros(total_samples)

    seconds_per_beat = 60 / bpm

    click = CLICK_SOUNDS[click_sound](
    volume=click_volume
)

    accent = CLICK_SOUNDS[accent_sound](
    volume=accent_volume
)

    beat = 0

    while beat * seconds_per_beat < duration:

        start = int(
            beat * seconds_per_beat * SAMPLE_RATE
        )

        if beat % beats_per_bar == 0:
            sound = accent
        else:
            sound = click

        end = start + len(sound)

        if end < total_samples:
            audio[start:end] += sound

        beat += 1

    return audio