import React from "react";
import Countdown from "react-countdown-now";

const Completionist = () => <div
className=" flex flex-row rounded-xl px-12 py-4 gap-2 text-[23px] font-bold "
style={{ color: "white" }}
>You are good to go!</div>;
// bg-gradient-to-r from-[#4327a3] to-[#dd117f] 

const renderer = ({ total, days, hours, minutes, seconds }) => {
  if (total) {
    // Render a countdown
    return (
      <div
        className=" w-[400px] flex flex-row rounded-xl  justify-center pt-1 pb-3 gap-3 border-2 border-white mx-auto my-20"
        style={{ color: "white" }}
      >
        <div className="flex flex-col ">
          <span className="text-[34px] font-bold ">{days}</span>
          <span className="text-[12px]">DAYS</span>
        </div>
        <span className="text-[34px] font-bold ">:</span>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[34px] font-bold ">{hours}</span>
          <span className="text-[12px]">HOURS</span>
        </div>
        <span className="text-[34px] font-bold ">:</span>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[34px] font-bold ">{minutes}</span>
          <span className="text-[12px]">MINUTES</span>
        </div>
        <span className="text-[34px] font-bold ">:</span>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[34px] font-bold ">{seconds}</span>
          <span className="text-[12px]">SECONDS</span>
        </div>
      </div>
    );
  } else {
    // Render a finished state
    return <Completionist />;
  }
};

const Timer = () => {
  return (
    <div className="App">
      <Countdown date="2023-11-15T10:00:00" renderer={renderer}>
        <Completionist />
      </Countdown>
    </div>
  );
};

export default Timer;
