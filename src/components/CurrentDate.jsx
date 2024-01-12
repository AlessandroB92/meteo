import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";

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
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className="d-flex flex-column py-3 w-30">
      <h4>Today's</h4>
      <p className="m-0 text-secondary">{formatDate(currentDateTime)}</p>
      <div className="d-flex align-items-center">
        <p className="m-0">{formatTime(currentDateTime)}</p>
        <FaClock className="mx-2" />
      </div>
    </div>
  );
};

export default DateTime;
