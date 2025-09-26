import React from 'react'
import { useState, useEffect } from 'react'

const CounterClock = () => {
    const targetData = new Date("2026-10-10T00:00:00").getTime();
    console.log(targetData)

    const [timeLeft, setTimeLeft] = useState(
        {
            days:0,
            hours:0,
            minutes: 0,
            seconds:0,
        }
    );

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetData - now;

            console.log(distance)
            if(distance <= 0){
                clearInterval(interval);
                return;
            }
            const days = Math.floor(distance/(1000 * 60* 60* 24))
            const hours = Math.floor((distance % (1000* 60* 60* 24)) / (1000* 60 * 60))
            const minutes = Math.floor((distance % (1000* 60* 60)) / (1000* 60))
            const seconds = Math.floor((distance % (1000* 60)) / (1000))

            setTimeLeft({days,hours,minutes,seconds})
        },1000);

        return() => clearInterval(interval)
    },[targetData])
  return (
    <>
    <div className='flex justify-center items-center gap-8'>
        <div className='flex flex-col items-center'>
            <span className='text-red-600 text-xl font-bold'>{String(timeLeft.days).toString().padStart(2,"0")}</span>
            <span className='text-gray-500 text-sm uppercase tracking-wide'>Days</span>
        </div>
        <div className='flex flex-col items-center'>
            <span className='text-red-600 text-xl font-bold'>{String(timeLeft.hours).toString().padStart(2,"0")}</span>
            <span className='text-gray-500 text-sm uppercase tracking-wide'>Hours</span>
        </div>
        <div className='flex flex-col items-center'>
            <span className='text-red-600 text-xl font-bold'>{timeLeft.minutes.toString().padStart(2,"0")}</span>
            <span className='text-gray-500 text-sm uppercase tracking-wide'>Minutes</span>
        </div>
        <div className='flex flex-col items-center'>
            <span className='text-red-600 text-xl font-bold'>{timeLeft.seconds.toString().padStart(2,"0")}</span>
            <span className='text-gray-500 text-sm uppercase tracking-wide'>Seconds</span>
        </div>
    </div>
    </>
  )
}

export default CounterClock