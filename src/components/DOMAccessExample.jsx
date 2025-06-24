import React, { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function DOMAccessExample() {
  const boxRef = useRef();
  const [color, setColor] = useState("lightgray");

  const changeColor = () => {
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = "lightgreen";
      console.log("Changed color via DOM. React state still:", color);
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">DOM Manipulation with Ref</Typography>
      <Typography variant="body2">React thinks box is {color}</Typography>
      <Box
        ref={boxRef}
        sx={{ height: 50, width: "100%", backgroundColor: color, mt: 1 }}
      />
      <Button onClick={changeColor} sx={{ mt: 1 }}>
        Change Color Directly
      </Button>
    </Box>
  );
}
