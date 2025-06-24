import React, { useRef } from 'react'
import { Box, Button, Typography } from '@mui/material'

export default function DOMAccessExample() {
  const boxRef = useRef()

  const changeColor = () => {
    if (boxRef.current) boxRef.current.style.backgroundColor = 'lightgreen'
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">DOM Manipulation with Ref</Typography>
      <Box ref={boxRef} sx={{ height: 50, width: '100%', backgroundColor: 'lightgray', mt: 1 }} />
      <Button onClick={changeColor} sx={{ mt: 1 }}>Change Color</Button>
    </Box>
  )
}