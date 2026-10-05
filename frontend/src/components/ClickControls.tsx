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

type ClickControlsProps = {
  bpm: number;
  setBpm: (value: number) => void;

  duration: number;
  setDuration: (value: number) => void;

  clickSound: string;
  setClickSound: (value: string) => void;

  clickVolume: number;
  setClickVolume: (value: number) => void;
};

export default function ClickControls({
  bpm,
  setBpm,
  duration,
  setDuration,
  clickSound,
  setClickSound,
  clickVolume,
  setClickVolume,
}: ClickControlsProps) {
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
          🥁 Metronome
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Configure tempo and click track
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Tempo
          </Typography>

          <Typography
            color="primary"
            sx={{ mb: 1 }}
          >
            {bpm} BPM
          </Typography>

          <Slider
            value={bpm}
            min={40}
            max={220}
            step={1}
            valueLabelDisplay="auto"
            onChange={(_, value) => {
              if (typeof value === "number") {
                setBpm(value);
              }
            }}
          />
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Duration
          </Typography>

          <Typography
            color="primary"
            sx={{ mb: 1 }}
          >
            {duration} sec
          </Typography>

          <Slider
            value={duration}
            min={5}
            max={300}
            step={5}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value} sec`}
            onChange={(_, value) => {
              if (typeof value === "number") {
                setDuration(value);
              }
            }}
          />
        </Box>

        <Box sx={{ mt: 4 }}>
          <FormControl fullWidth>
            <InputLabel>Click Sound</InputLabel>

            <Select
              value={clickSound}
              label="Click Sound"
              onChange={(e) =>
                setClickSound(e.target.value)
              }
            >
              <MenuItem value="woodblock">
                🪵 Woodblock
              </MenuItem>

              <MenuItem value="beep">
                🔔 Beep
              </MenuItem>

              <MenuItem value="stick">
                🥢 Stick
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Click Volume
          </Typography>

          <Typography
            color="primary"
            sx={{ mb: 1 }}
          >
            {Math.round(clickVolume * 100)}%
          </Typography>

          <Slider
            value={clickVolume}
            min={0}
            max={1}
            step={0.05}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) =>
              `${Math.round(Number(value) * 100)}%`
            }
            onChange={(_, value) => {
              if (typeof value === "number") {
                setClickVolume(value);
              }
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}