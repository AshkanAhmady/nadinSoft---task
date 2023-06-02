import { useEffect, useState } from "react";
import { Typography } from '@mui/material';

const Timer = () => {
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

    return <Typography align="center" variant="h2">{time}</Typography>;
}

export default Timer;