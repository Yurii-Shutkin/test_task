import React from "react";
import Countdown from "react-countdown";
import './Timer.css'

const getFutureTime = (hours, minutes, seconds) => {
    return Date.now() + (hours * 3600 + minutes * 60 + seconds) * 1000;
};

export default function Timer() {
    return (
        <div className="countdown">
            <Countdown
                date={getFutureTime(14, 55, 15)} // 14 часов, 55 минут, 15 секунд
                renderer={({ hours, minutes, seconds }) => (
                    <div className="countdown">
                        <TimeBox label="годин" value={hours} />
                        <TimeBox label="хвилин" value={minutes} />
                        <TimeBox label="секунд" value={seconds} />
                    </div>
                )}
            />
        </div>
    );
}

function TimeBox({ label, value }) {
    return (
        <div className="time-box">
            <span className="time-value">{value.toString().padStart(2, "0")}</span>
            <span className="time-label">{label}</span>
        </div>
    );
}
