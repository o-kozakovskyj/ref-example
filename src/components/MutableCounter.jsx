import React, { useRef, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'

export default function MutableCounter() {
  const countRef = useRef(0)
  const [, setForceRender] = useState(0)

  const increment = () => {
    countRef.current += 1
    setForceRender(prev => prev + 1)
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">Mutable Ref Counter (no re-renders)</Typography>
      <Typography>Current Count: {countRef.current}</Typography>
      <Button onClick={increment} sx={{ mt: 1 }}>Increment</Button>
    </Box>
  )
}