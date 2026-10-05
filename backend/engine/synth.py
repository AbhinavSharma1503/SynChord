import fluidsynth
import tempfile
import wave
import os
import numpy as np

from engine.constants import SAMPLE_RATE

SOUNDFONT = "engine/soundfonts/Reality_GMGS_falcomod.sf2"

PROGRAMS = {
    "piano": 0,
    "organ": 19,
    "strings": 48,
    "choir": 52,
}

def render_note(
    midi_note: int,
    duration: float,
    instrument: str,
    volume: float,
):
    fs = fluidsynth.Synth()

    fs.start(driver="file")

    sfid = fs.sfload(SOUNDFONT)

    fs.program_select(
        0,
        sfid,
        0,
        PROGRAMS[instrument],
    )

    velocity = int(volume * 127)

    fs.noteon(
        0,
        midi_note,
        velocity,
    )

    fs.sleep(duration)

    fs.noteoff(
        0,
        midi_note,
    )

    filename = tempfile.mktemp(".wav")

    fs.delete()

    with wave.open(filename, "rb") as wav:
        frames = wav.readframes(wav.getnframes())

    audio = np.frombuffer(
        frames,
        dtype=np.int16,
    )

    os.remove(filename)

    return audio.astype(np.float32) / 32768