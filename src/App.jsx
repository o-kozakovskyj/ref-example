import React from "react";
import { Container, Typography, Divider } from "@mui/material";
import AutoFocusInput from "./components/AutoFocusInput";
import DOMAccessExample from "./components/DOMAccessExample";
import TimerWithRef from "./components/TimerWithRef";
import RefForwarding from "./components/RefForwarding";

export default function App() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        useRef Only Examples
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <AutoFocusInput />
      <DOMAccessExample />
      <TimerWithRef />
      <RefForwarding />
    </Container>
  );
}
