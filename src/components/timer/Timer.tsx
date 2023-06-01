import { useEffect, useState } from "react";
import { Typography } from '@mui/material';

const Timer = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        realTime()
    }, [])

    const realTime = () => {
        setInterval(updateTime, 1000);
        function updateTime() {
            setTime(new Date())
        }
    }

    return <Typography align="center" variant="h2">{time.getHours()}:{time.getMinutes()}</Typography>;
}

export default Timer;