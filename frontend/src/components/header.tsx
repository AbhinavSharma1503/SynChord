import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";

import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        borderRadius: 4,
        background:
          "linear-gradient(90deg,#2563EB,#1D4ED8)",
        mb: 5,
      }}
    >
      <Toolbar>

        <MusicNoteIcon
          sx={{
            fontSize: 32,
            mr: 2,
          }}
        />

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            flexGrow: 1,
          }}
        >
          SynChord
        </Typography>

        <Typography
          sx={{
            mr: 2,
            opacity: 0.8,
          }}
        >
          v0.1
        </Typography>

        <Tooltip title="Settings">
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
        </Tooltip>

      </Toolbar>
    </AppBar>
  );
}