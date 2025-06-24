import React, { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function TimerWithRef() {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);

  const start = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">Timer with useRef</Typography>
      <Typography>Seconds Elapsed: {time}</Typography>
      <Button onClick={start} sx={{ mt: 1, mr: 1 }}>
        Start
      </Button>
      <Button onClick={stop} sx={{ mt: 1 }}>
        Stop
      </Button>
    </Box>
  );
}
