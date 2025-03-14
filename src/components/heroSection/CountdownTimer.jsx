import { useState, useEffect } from "react";

const getNextSunday7PM = () => {
  const now = new Date();
  const daysUntilSunday = (7 - now.getDay()) % 7 || 7;
  const nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + daysUntilSunday);
  nextSunday.setHours(19, 0, 0, 0); // 7:00 PM IST

  return nextSunday;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getNextSunday7PM() - new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getNextSunday7PM() - new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    if (ms <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };

    const totalSeconds = Math.floor(ms / 1000);
    const days = String(Math.floor(totalSeconds / 86400)).padStart(2, "0");
    const hours = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="flex flex-col items-center text-white mt-3">
      <h2 className="text-lg font-semibold mb-3">Workshop Starts In:</h2>
      <div className="flex gap-1 sm:gap-4">
        {[
          { label: "Days", value: days },
          { label: "Hours", value: hours },
          { label: "Minutes", value: minutes },
          { label: "Seconds", value: seconds },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center rounded-full border-2 sm:border-4 border-green-500 bg-white text-green-500 font-bold 
              w-16 h-16 text-xl 
              sm:w-24 sm:h-24 sm:text-3xl"
          >
            <span>{value}</span>
            <span className="text-xs font-light text-black sm:text-lg">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
