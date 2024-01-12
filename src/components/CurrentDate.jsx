import React, { useState, useEffect } from 'react';

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
    };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className="cpntainer-fluid py-3 w-30">
        <h4>Today's</h4>
      <p>{formatDate(currentDateTime)}</p>
      <p>{formatTime(currentDateTime)}</p>
    </div>
  );
};

export default DateTime;
