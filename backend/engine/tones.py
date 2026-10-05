import math

import numpy as np

from engine.synth import render_note
from engine.instruments import INSTRUMENTS
from engine.constants import NOTE_TO_MIDI, SAMPLE_RATE

# ---------------------------------------------------
# Utility Functions
# ---------------------------------------------------

def midi_to_frequency(midi_note: int) -> float:
    """
    Convert MIDI note number to frequency (Hz).
    """

    return 440 * (2 ** ((midi_note - 69) / 12))


# ---------------------------------------------------
# Instrument Generators
# ---------------------------------------------------

def generate_sine(
    frequency: float,
    duration: float,
    volume: float,
):
    """
    Generate a sine wave.
    """

    t = np.linspace(
        0,
        duration,
        int(SAMPLE_RATE * duration),
        endpoint=False,
    )

    wave = volume * np.sin(
        2 * np.pi * frequency * t
    )

    return wave


# Future instruments
# ------------------

def generate_piano(
    frequency: float,
    duration: float,
):
    raise NotImplementedError(
        "Piano instrument not implemented yet."
    )


def generate_strings(
    frequency: float,
    duration: float,
):
    raise NotImplementedError(
        "Strings instrument not implemented yet."
    )


def generate_organ(
    frequency: float,
    duration: float,
):
    raise NotImplementedError(
        "Organ instrument not implemented yet."
    )


def generate_choir(
    frequency: float,
    duration: float,
):
    raise NotImplementedError(
        "Choir instrument not implemented yet."
    )


# ---------------------------------------------------
# Instrument Registry
# ---------------------------------------------------

INSTRUMENT_GENERATORS = {
    "sine": generate_sine,
    "piano": generate_piano,
    "strings": generate_strings,
    "organ": generate_organ,
    "choir": generate_choir,
}


# ---------------------------------------------------
# Main API
# ---------------------------------------------------

def generate_tone(
    note: str,
    duration: float,
    instrument: str,
    volume: float,
):

    if note not in NOTE_TO_MIDI:
        raise ValueError(f"Unknown note: {note}")

    if instrument not in INSTRUMENTS:
        raise ValueError(f"Unknown instrument: {instrument}")

    # 👇 ADD THIS HERE
    instrument_info = INSTRUMENTS[instrument]

    midi_note = NOTE_TO_MIDI[note]

    frequency = midi_to_frequency(midi_note)

    if instrument == "sine":
        return generate_sine(
        frequency,
        duration,
        volume,
    )

    return render_note(
        midi_note,
        duration,
        instrument,
        volume,
    )