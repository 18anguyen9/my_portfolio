import { useState, useEffect } from "react";
const apiKey = '60e013f11a1da052b3797129585e7fb3';

async function Forecast(ForcastData){
    const forcastUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${ForcastData.coord.lat}&lon=${ForcastData.coord.lon}&appid=${apiKey}`;
    const response = await fetch(forcastUrl);
    const data = await response.json()
    return data;
}
async function Weather(cityname){
    let weatherData;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=imperial`);
    weatherData = await response.json()
    return weatherData;
}
export {Forecast,Weather};