import { useState, useEffect } from "react";

function Weathercall({ data }) {
    const [dataForcast,setDataForcast] = useState({});
    let sunrise;
    let sunset;
    let weatherIcon;
    let weatherDescription;
    if (data.hasOwnProperty('main')){
        sunrise = (new Date(data.sys.sunrise*1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        sunset  = (new Date(data.sys.sunset*1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherDescription = String(data.weather[0].description);
        weatherDescription = weatherDescription.charAt(0).toUpperCase() +weatherDescription.slice(1);
        console.log(weatherDescription);
    }

    return (
        <div className='pt-8 pl-12'>
            <div className='pl-4 py-6'>
                <p className='text-4xl'>{data.name ? String(data.name)+', ' +String(data.sys.country) :null}</p>
                <p className='text-2xl'>{data.dt ? (new Date(data.dt*1000).toDateString()):null}</p>
            </div>

            
            <div className='flex py-14 w-full justify-between text-4xl px-24'>

                <div className='px-12 flex items-center  bg-slate-100 bg-opacity-60 rounded-lg text-2xl'>
                    {weatherIcon ? <img className='' src={weatherIcon}></img>:null}
                    <div>
                        <p>{data.main ? (data.main.temp) : 'loading'} ºF</p>
                        <p className=''>{weatherDescription ? (weatherDescription) : 'loading'}</p>
                    </div>
                    
                </div>
                
                <div className='flex px-20 bg-slate-100 bg-opacity-60 rounded-lg py-4 items-center text-lg'>

                    <div className='pr-16'>
                        <div className='px-4 py-4'>
                            <p>{data.main ? (data.main.temp_max) : 'loading'} ºF</p>
                            <p className='text-center'>High</p>
                        </div>

                        <div className='px-4 py-4' >
                            <p>{data.main ? (data.main.temp_min) : 'loading'} ºF</p>
                            <p className='text-center'>Low</p>
                        </div>
                    </div>
                    
                    <div className='pl-16'>
                        <div className='px-4 py-4'>
                            <p className=''>{sunrise ? sunrise :'loading'} PST</p>
                            <p className='text-center'>Sunrise</p>
                        </div>
                        <div className='px-4 py-4'>
                            <p className=''>{sunset ? sunset:'loading'} PST</p>
                            <p className='text-center'>Sunset</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Weathercall;