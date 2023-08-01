import {useState, useEffect} from "react";

const Timer = (props) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    let timer;
    useEffect(() => {
        // eslint-disable-next-line
        timer = setInterval(() => {
            setSeconds(seconds + 1);
            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }
            if (minutes === 59) {
                setHours(hours + 1);
                setMinutes(0);
            }
        }, 1000);
        return (() => {
            clearInterval(timer);
        })
    });


    return (
        <>
            <h2 className="text-sm font-medium">{hours < 10 ? '0' + hours : hours}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</h2>
        </>
    )
}

export default Timer;