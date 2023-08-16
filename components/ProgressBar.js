import React, { useEffect, useState } from 'react'

const ProgressBar = () => {

    const [percentage, setpercentage] = useState(0);
    const [time, settime] = useState(null);


    const handleStart = () => {
        setpercentage(0);
        if (time) { 
            clearInterval(time);
        }

        let timer = setInterval(() => {
            setpercentage((percentage) => percentage + 10);
        }, 1000)

        settime(timer);

        
    }

    useEffect(() => { 
        if (percentage >= 100) { 
            clearInterval(time);
            console.log("Stopped");
        }
        console.log(percentage);
        

    },[percentage])

    return (
        <div className='mt-10'>
            <div className='w-1/2 m-auto h-6 bg-gray-300 rounded-md overflow-hidden'>
                <div className={`h-6 bg-red-600 rounded-md transition-all duration-500`} style={{
                    transform : `translateX(${percentage - 100}%)`
                }}>
                </div>
            </div>
            
            <button onClick={() => handleStart()}>Start</button>
        </div>
    )
}

export default ProgressBar
