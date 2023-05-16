'use client';
import {useEffect, useState} from "react";

function Timer() {
  const [counter,setCounter] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setCounter(counter+1)
    },1000);
  })
  return (
      <span>{counter}</span>
  )
}

export default Timer;