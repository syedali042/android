import React, {useState, useEffect, useRef} from 'react'

function calculateTimeLeft(date) {
    // const year = new Date().getFullYear();
    const difference = +new Date(`${date}`) - +new Date();
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
  }
  
  export default function Counter(props) {
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft(props.date));
  
    React.useEffect(() => {
      const id = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(props.date));
      }, 1000);
  
      return () => {
        clearTimeout(id);
      };
    });
  
    const timerComponents = Object.keys(timeLeft).map(interval => {
      if (!timeLeft[interval]) {
        return;
      }
  
      return (
         <span style={{color:props.color}}>
          {timeLeft[interval]} {interval}{" "}
        </span>
      )
    });
  
    return (
      <div className="d-flex align-items-center justify-content-center pt-2">
        <span style={{color:props.color}}>Time Left : </span> &nbsp;{timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    );
  }
  