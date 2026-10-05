import {
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Box,
} from "@mui/material";

type ToneControlsProps = {
  rootNote: string;
  setRootNote: (value: string) => void;

  instrument: string;
  setInstrument: (value: string) => void;

  toneVolume: number;
  setToneVolume: (value: number) => void;
};

export default function ToneControls({
  rootNote,
  setRootNote,
  instrument,
  setInstrument,
  toneVolume,
  setToneVolume,
}: ToneControlsProps) {
  return (
    <Card
  elevation={10}
  sx={{
    borderRadius: 5,
    overflow: "hidden",
    background:
      "linear-gradient(180deg, #1E293B 0%, #111827 100%)",
    transition: "all 0.3s ease",

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
    },
  }}
>
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          🎹 Tone Settings
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Configure your reference tone
        </Typography>

        <Box sx={{ mt: 3 }}>
          <FormControl fullWidth>
            <InputLabel>Root Note</InputLabel>

            <Select
              value={rootNote}
              label="Root Note"
              onChange={(e) =>
                setRootNote(e.target.value)
              }
            >
              {[
                "C",
                "C#",
                "D",
                "D#",
                "E",
                "F",
                "F#",
                "G",
                "G#",
                "A",
                "A#",
                "B",
              ].map((note) => (
                <MenuItem
                  key={note}
                  value={note}
                >
                  {note}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mt: 3 }}>
          <FormControl fullWidth>
            <InputLabel>Instrument</InputLabel>

            <Select
              value={instrument}
              label="Instrument"
              onChange={(e) =>
                setInstrument(e.target.value)
              }
            >
              <MenuItem value="sine">
                🎵 Sine
              </MenuItem>

              <MenuItem value="piano">
                🎹 Piano
              </MenuItem>

              <MenuItem value="organ">
                🎺 Organ
              </MenuItem>

              <MenuItem value="strings">
                🎻 Strings
              </MenuItem>

              <MenuItem value="choir">
                🎼 Choir
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Tone Volume
          </Typography>

          <Typography
            color="primary"
            sx={{ mb: 1 }}
          >
            {Math.round(toneVolume * 100)}%
          </Typography>

          <Slider
            value={toneVolume}
            min={0}
            max={1}
            step={0.05}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) =>
              `${Math.round(Number(value) * 100)}%`
            }
            onChange={(_, value) => {
              if (typeof value === "number") {
                setToneVolume(value);
              }
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}