import React from 'react'
import { Container, Typography, Divider } from '@mui/material'
import AutoFocusInput from './components/AutoFocusInput'
import DOMAccessExample from './components/DOMAccessExample'
import MutableCounter from './components/MutableCounter'
import RefForwarding from './components/RefForwarding'
import TimerWithRef from './components/TimerWithRef'

export default function App() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>useRef Demo</Typography>
      <Divider sx={{ mb: 2 }} />
      <AutoFocusInput />
      <DOMAccessExample />
      <MutableCounter />
      <TimerWithRef />
      <RefForwarding />
    </Container>
  )
}