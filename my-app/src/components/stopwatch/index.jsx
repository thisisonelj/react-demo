/**
 * 秒表
 */
import { useState, useRef } from "react";
import { Button } from "antd";
import "./index.scss";

function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [nowTime, setNowTime] = useState(null);
  const intervalRef = useRef(null);
  let secondText = 0;
  const startClick = () => {
    setStartTime(Date.now());
    setNowTime(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNowTime(Date.now());
    }, 10);
  };
  const endClick = () => {
    clearInterval(intervalRef.current);
  };
  if (startTime && nowTime) {
    secondText = nowTime - startTime;
  }
  return (
    <>
      <div className="stop-watch-container">
        <h1 className="title">{(secondText / 1000).toFixed(3)}</h1>
        <Button onClick={startClick}>开始</Button>
        <Button onClick={endClick}>结束</Button>
      </div>
    </>
  );
}
export default StopWatch;
