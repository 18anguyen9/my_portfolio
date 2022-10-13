import ConvertTime from './convertTime';
import { useState, useEffect } from "react";

function ForcastCall({ forcastData }){
    let dayZero;
    let finalResult;
    
    if (forcastData.hasOwnProperty('lat')){
        console.log(forcastData);
        dayZero = ConvertTime(forcastData.daily[0].dt)
        const allDays = forcastData.daily.map(({dt, weather}) => {
            return <div className='px-8'>
                {ConvertTime(dt)}
                <p className='text-center'>{weather[0].description.charAt(0).toUpperCase() +weather[0].description.slice(1)}</p>
                <img className='' src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}></img>
                </div>
        })
        finalResult = (
            <div className ='flex bg-slate-100  bg-opacity-60 justify-between rounded-lg pt-4 mt-8'>
                {allDays.slice(1,6)}
            </div>
        )
    }else{
        finalResult = (<div></div>)
    };

    return (
        <>
            {finalResult}
        </>
        
    )
}
export default ForcastCall;