import React, { useEffect } from "react";
import { useState } from "react";
import './Timer.css'

const Timer = () =>{

    const [Days,setDays] = useState(0);
    const [Hours,setHours] = useState(0);
    const [Minutes,setMinutes] = useState(0);
    const [Seconds,setSeconds] = useState(0);

    const Deadline = "December,31,2023";
    const getTime = () =>{
        const time = Date.parse(Deadline) - Date.now();

        setDays(Math.floor(time/(1000*60*60*24)));
        setHours(Math.floor(time/(1000*60*60)%24));
        setMinutes(Math.floor(time/(1000*60)%60));
        setSeconds(Math.floor(time/(1000)%60));


    };

    useEffect(() =>{
        const interval = setInterval(() => getTime(Deadline),1000);
        return () => clearInterval(interval);

    } , []);

    const style = {
        color:'brown',
        display:"flex",
        justifyContent:"center",
        marginTop:'300px'

    }

    const bar = {
        borderColor:'blue',
        // width:'10px',
        height:'20px',
      
    }

    return(
        <div className="parent">
            
    <div  class='Timer' style={style}>
        
        <div className="container">
        <h1> {Days}</h1>
        </div >
        <div  className="container">
        <h1> {Hours}</h1>
        </div>
        <div  className="container">
        <h1> {Minutes}</h1>
        </div>
        <div  className="container">
        <h1> {Seconds}</h1>
        </div>
        </div>

    </div>
    )
}

export default Timer;   