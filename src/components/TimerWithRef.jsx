import React, { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

// export default function TimerWithRef() {
//   const timerRef = useRef(null);
//   const [time, setTime] = useState(0);
//   const ticksRef = useRef(0);

//   const start = () => {
//     if (timerRef.current) return;
//     timerRef.current = setInterval(() => {
//       ticksRef.current += 1;
//       setTime((prev) => prev + 1);
//     }, 1000);
//   };

//   const stop = () => {
//     clearInterval(timerRef.current);
//     timerRef.current = null;
//   };

//   return (
//     <Box sx={{ mt: 2 }}>
//       <Typography variant="h6">Timer with useRef</Typography>
//       <Typography>Seconds Elapsed: {time}</Typography>
//       <Typography>
//         Internal Ticks Count (ref only): {ticksRef.current}
//       </Typography>
//       <Button onClick={start} sx={{ mt: 1, mr: 1 }}>
//         Start
//       </Button>
//       <Button onClick={stop} sx={{ mt: 1 }}>
//         Stop
//       </Button>
//     </Box>
//   );
// }

export default function TimerWithRef() {
  const timerRef = useRef(null);
  const count = useRef(0);
  const displayRef = useRef(null);

  const start = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      count.current += 1;
      if (displayRef.current) {
        displayRef.current.textContent = `Internal Ticks Count: ${count.current}`;
      }
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">
        Timer via useRef (No State, No Re-render)
      </Typography>
      <Typography ref={displayRef}>Internal Ticks Count: 0</Typography>
      <Button onClick={start} sx={{ mt: 1, mr: 1 }}>
        Start
      </Button>
      <Button onClick={stop} sx={{ mt: 1 }}>
        Stop
      </Button>
    </Box>
  );
}