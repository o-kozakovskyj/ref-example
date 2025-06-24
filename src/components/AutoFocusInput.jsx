import React, { useRef, useEffect } from "react";
import { TextField, Box, Typography } from "@mui/material";

export default function AutoFocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">Auto Focus Input</Typography>
      <TextField inputRef={inputRef} label="Autofocused Input" fullWidth />
    </Box>
  );
}
