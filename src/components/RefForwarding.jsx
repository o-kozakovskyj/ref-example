import React, { useRef } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";

const CustomInput = React.forwardRef((props, ref) => (
  <TextField label="Forwarded Ref Input" inputRef={ref} fullWidth {...props} />
));

export default function RefForwarding() {
  const inputRef = useRef();

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">Forward Ref Example</Typography>
      <CustomInput ref={inputRef} />
      <Button sx={{ mt: 1 }} onClick={() => inputRef.current?.focus()}>
        Focus Input
      </Button>
    </Box>
  );
}
