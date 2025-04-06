import React, { useEffect, useState } from "react";

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};
const Timer = () => {
  const [time, setTime] = useState(0);
  const [isPause, setIsPause] = useState(false);
  useEffect(() => {
    if (isPause) return;
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isPause]);
  return (
    <div>
      <h1>Time : {formatTime(time)}</h1>
      <button
        onClick={() => {
          setIsPause((prev) => !prev);
        }}
      >
        {isPause ? "Зняти з паузи" : "Поставити на паузу"}
      </button>
    </div>
  );
};

export default Timer;
