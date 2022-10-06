import { useState, useEffect } from "react";
import Weathercall from './weathercall';
function Weatherbody() {
    const [data,setData] = useState({});
    const [search,setSearch] = useState('');
    const [test,setTest] = useState('');
    const [url,setUrl] = useState('');
    const apiKey = '60e013f11a1da052b3797129585e7fb3';
    //const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Riverside&appid=${apiKey}`;
    
    /*
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((err) => console.log('error'));
    }, [apiUrl]);*/

    const onClick = (e) => {
        e.preventDefault();
        //setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((err) => console.log('error'));
        console.log(data);
        
    };

    

    return (
        <div>
            <p>{data.name}</p>
            <form onSubmit={onClick} >
                <input
                    type = 'text'
                    placeholder='Please enter a city here'
                    value = {search}
                    onChange = {(e) => setSearch(e.target.value)}
                />
                <button onClick={onClick}>Submit</button>
            </form>
            
            <Weathercall data= {data}></Weathercall>
        </div>

    )
}
export default Weatherbody;