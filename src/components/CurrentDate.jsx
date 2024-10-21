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
    <div className="d-flex flex-column p-3 w-30">
      <h3>Today's</h3>
      <p className="m-0 text-capitalize text-secondary fs-2">{formatDate(currentDateTime)}</p>
      <div className="d-flex align-items-center">
        <FaClock className="me-4 fs-2" />
        <p className="m-0 fs-2">{formatTime(currentDateTime)}</p>
      </div>
    </div>
  );
};

export default DateTime;
