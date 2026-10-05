import { useState } from "react";

import ToneControls from "./components/ToneControls";
import ClickControls from "./components/ClickControls";

import { generateTrack } from "./services/api";
import { previewTrack } from "./services/api";

import Header from "./components/header";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import DownloadIcon from "@mui/icons-material/Download";
import {
  Box,
  Button,
  Typography,
  Tabs,
  Tab,
  Container,
  Grid,
} from "@mui/material";
function App() {
  const [bpm, setBpm] = useState(120);

  const [rootNote, setRootNote] = useState("E");

  const [duration, setDuration] = useState(10);

  const [instrument, setInstrument] = useState("sine");

  const [toneVolume, setToneVolume] = useState(0.8);

  const [clickSound, setClickSound] = useState("woodblock");

  const [clickVolume, setClickVolume] = useState(0.5);

  const [tab, setTab] = useState(0);

  const [downloadUrl, setDownloadUrl] = useState("");

  async function handleGenerate() {
  try {
    const blob = await generateTrack({
      bpm,
      root_note: rootNote,
      duration,
      instrument,
      tone_volume: toneVolume,
      click_sound: clickSound,
      click_volume: clickVolume,
      accent_volume: 1.0,
    });

    console.log("Blob:", blob);
    console.log("Type:", blob.type);
    console.log("Size:", blob.size);

    const url = URL.createObjectURL(blob);

    setDownloadUrl(url);

    const audio = new Audio(url);

    await audio.play();

  } catch (err) {
    console.error(err);
  }
}
async function handlePreview() {
  try {
    const blob = await previewTrack({
      root_note: rootNote,
      instrument,
      tone_volume: toneVolume,
    });

    const url = URL.createObjectURL(blob);

    const audio = new Audio(url);

    await audio.play();
  } catch (err) {
    console.error(err);
  }
}

  return (
  <Container
    maxWidth="xl"
    sx={{
      py: 4,
    }}
  >
    <Header />

    <Tabs
      value={tab}
        onChange={(_, value)=>setTab(value)}
        centered
        textColor="primary"
        indicatorColor="primary"
        sx={{
        mb:5,

        "& .MuiTab-root":{
        fontSize:"1rem",
        fontWeight:700,
        textTransform:"none",
        },

        "& .MuiTabs-indicator":{
        height:4,
        borderRadius:10,
        },
        }}
        >
      <Tab
      label="Reference Tone"
      />
      <Tab
      label="Arrangement Practice"
      />
    </Tabs>

    {tab === 0 && (
        <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <ToneControls
                rootNote={rootNote}
                setRootNote={setRootNote}
                instrument={instrument}
                setInstrument={setInstrument}
                toneVolume={toneVolume}
                setToneVolume={setToneVolume}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <ClickControls
                bpm={bpm}
                setBpm={setBpm}
                clickSound={clickSound}
                setClickSound={setClickSound}
                clickVolume={clickVolume}
                setClickVolume={setClickVolume}
                duration={duration}
                setDuration={setDuration}
              />
            </Grid>
          </Grid>
        </Container>
      )}

    {tab === 1 && (
      <Box
        sx={{
          mt: 5,
          textAlign: "center",
        }}
      >
        <Typography variant="h5">
          🎼 Arrangement Practice
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Coming Soon 🚀
        </Typography>
      </Box>
    )}

    {tab === 0 && (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      gap: 2,
      mt: 5,
    }}
  >
    <Button
      variant="outlined"
      size="large"
      startIcon={<VolumeUpIcon />}
      onClick={handlePreview}
      sx={{
        px: 4,
        py: 1.5,
        borderRadius: 3,
        textTransform: "none",
      }}
    >
      Preview Note
    </Button>

    <Button
      variant="contained"
      size="large"
      startIcon={<PlayArrowIcon />}
      onClick={handleGenerate}
      sx={{
        px: 5,
        py: 1.5,
        borderRadius: 3,
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      Generate Track
    </Button>

    <Button
      variant="contained"
      color="secondary"
      startIcon={<DownloadIcon />}
      href={downloadUrl}
      download="SynChord_Practice.wav"
      sx={{
        px: 4,
        py: 1.5,
        borderRadius: 3,
        textTransform: "none",
      }}
    >
      Download WAV
    </Button>
  </Box>
)}
  <Typography
  align="center"
  color="text.secondary"
  sx={{
    mt: 8,
    mb: 2,
  }}
>
  SynChord • Built with React + FastAPI
</Typography>
  </Container>
);
}

export default App;