# instruments.py

INSTRUMENTS = {

    "sine": {
        "type": "synthetic",
        "sustain": True,
    },

    "piano": {
        "type": "soundfont",
        "program": 0,
        "sustain": False,
    },

    "electric_piano": {
        "type": "soundfont",
        "program": 4,
        "sustain": False,
    },

    "organ": {
        "type": "soundfont",
        "program": 19,
        "sustain": True,
    },

    "strings": {
        "type": "soundfont",
        "program": 48,
        "sustain": True,
    },

    "choir": {
        "type": "soundfont",
        "program": 52,
        "sustain": True,
    },

    "flute": {
        "type": "soundfont",
        "program": 73,
        "sustain": True,
    }
}