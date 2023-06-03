import { useEffect, useState } from "react";
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Timer = () => {
    const theme = useTheme();
    const [time, setTime] = useState(new Date().toLocaleString("en", {
        hour12: false,
        timeStyle: 'short',
    }))

    useEffect(() => {
        realTime()
    }, [])

    const realTime = () => {
        setInterval(updateTime, 1000);
        function updateTime() {
            setTime(new Date().toLocaleString("en", { hour12: false, timeStyle: 'short' }))
        }
    }

    return <Typography sx={{ color: `${theme.palette.mode === "dark" ? "white" : "unset"}` }} align="center" variant="h2">{time}</Typography>;
}

export default Timer;