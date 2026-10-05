import soundfile as sf

from engine.constants import SAMPLE_RATE

def save_audio(audio, filename):
    """
    Save mono or stereo audio to a WAV file.
    """
    sf.write(filename, audio, SAMPLE_RATE)