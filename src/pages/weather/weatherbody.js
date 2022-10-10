import { useState, useEffect } from "react";
import Weathercall from './weathercall';

function Weatherbody() {
    const [data,setData] = useState({});
    const [search,setSearch] = useState('');
    const [forcastData, setForcastData] = useState({});
    const apiKey = '60e013f11a1da052b3797129585e7fb3';
    const [goodCall, setgoodCall] = useState(true);

    const onClick = (e) => {
        e.preventDefault();
        let forcastUrl;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=imperial`)
            .then((response) => response.json())
            .then((data) => {
                //console.log(data.coord.lat);
                //forcastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}`;
                console.log(data);
                if (data.cod =='200'){
                    setgoodCall(true);
                }else{
                    setgoodCall(false);
                }
                setData(data);
            })
            .catch((err) => console.log('error'));

        //const forcastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.lon}&appid=${apiKey}`;
        /*if (forcastUrl!==null){
            fetch(forcastUrl)
            .then((response) => response.json())
            .then((data) => setForcastData(data))
            .catch((err) => console.log('error'));
        }*/
        
        console.log(data);
        //console.log(forcastUrl);
        setSearch('');
        
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

            {goodCall ? <Weathercall data= {data}></Weathercall>: null}
           
        </div>

    )
}
export default Weatherbody;