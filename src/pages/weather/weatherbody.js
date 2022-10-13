import { useState, useEffect } from "react";
import Weathercall from './weathercall';
import ForcastCall from './forcastCall';
import {Forecast, Weather} from './apiCalls';

function Weatherbody() {
    const [weatherdata,setWeatherData] = useState({});
    const [search,setSearch] = useState('');
    const [forcastData, setForcastData] = useState({});
    const apiKey = '60e013f11a1da052b3797129585e7fb3';
    const [goodCall, setgoodCall] = useState(true);
    const [test,setTest] = useState(0);


    // get weather and forcast data on submit
    const onClick = (e) => {
        e.preventDefault();
        const weather = (Weather(search)).then((data)=>{return data;});
        weather.then((data)=>setWeatherData(data));

        const ft = weather.then((data)=> Forecast(data))
        ft.then((data)=>setForcastData(data));
        
        setSearch('');
        setForcastData({});
    };
    
    

    return (
        <div className='bg-weather w-full bg-cover text-white'>
            <p className='pl-4 text-lg'>Weather App</p>
            
            <form onSubmit={onClick} className='text-center' >
                <input
                    className = 'rounded-full pl-4  text-black'
                    type = 'text'
                    placeholder='Please enter a city here'
                    value = {search}
                    onChange = {(e) => setSearch(e.target.value)}
                />
                <button className='px-2 bg-slate-100 rounded-full text-slate-400 ml-2' onClick={onClick}>Submit</button>
                <div className='text-center bg-red-600 my-2'>{goodCall ? null: 'Please Enter a Valid City'}</div>
            </form>

            <div className='px-32'>
                {goodCall ? <Weathercall data= {weatherdata}></Weathercall>: null}
                {goodCall ? <ForcastCall  forcastData = {forcastData}></ForcastCall>: null}

            </div>
            
            
           
        </div>

    )
}
export default Weatherbody;