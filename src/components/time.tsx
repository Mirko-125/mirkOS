"use client";

import { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  return (
    <time dateTime={time.toISOString()} className="font-mono text-sm select-none" aria-label="Current time">
      {formattedTime}
    </time>
  );
};

export default Time;