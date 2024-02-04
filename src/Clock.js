import { useState } from "react";
import  './index.css';
const Clock = () => {
    let time=new Date().toLocaleTimeString();
    const [currtime,setCurrTime]=useState(time);
    const updateTime=()=>{
      let time=new Date().toLocaleTimeString();
      setCurrTime(time);
    }
    //for time continue
    setInterval(updateTime,1000);
  return (
    <div className="clock">
      <h1>{currtime}</h1>
    </div>
  )
}
export default Clock;
