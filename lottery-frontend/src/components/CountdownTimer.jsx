import { useEffect, useState } from "react";

export const CountdownTimer = ({ lastTimeStamp, interval }) => {
  const [remaining, setRemaining] = useState(interval);

  useEffect(() => {
    const updateRemaining = () => {
      const now = Math.floor(Date.now() / 1000);
      const endTime = lastTimeStamp + interval;
      const timeLeft = Math.max(endTime - now, 0);
      setRemaining(timeLeft);
    };

    updateRemaining(); // Initial
    const timer = setInterval(updateRemaining, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup
  }, [lastTimeStamp, interval]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${days} days : ${hours} hrs : ${minutes} mins : ${secs} s`;
  };

  return (
    <h2 className="text-secondary font-boldonse text-2xl">
      {formatTime(remaining)}
    </h2>
  );
};