import React, { useState } from "react";
import './weather.css';
import { DateTime } from "./date-time";

const apiKey ="05b38d29971d16e601a24239bc9fdcc4"

export function WeatherApp(){
    const[search ,setSearch] = useState("");
    const[weather,setWeather] = useState(
        {
        icon :"https://openweathermap.org/img/wn/04n.png",
        temp :"",
        city:"",
        humidity :"",
        speed:"",
        description:""
    });

    function searchPressed(){   
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(result =>{
            setWeather({
                icon :`https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
                temp : result.main.temp,
                city: result.name,
                humidity : result.main.humidity,
                speed: result.wind.speed,
                description : result.weather[0].description
            });
        })
      
    }
    return(
        <div className="container-fluid">
            <div className="card">
                    <div className=" card-header">
                    <DateTime/>
                    </div>
            <div className=" card-body">
                <div className="search">
                <input type="text" className="search-bar" onChange={(e)=> setSearch(e.target.value)} placeholder="Search"/>
                <button className=" bi bi-search" onClick={searchPressed}></button>
                </div> 

                <div>
                    <div className="text-center">
                        <img src={weather.icon} />
                        <h4>{weather.description}</h4>   
                    </div>
                    <div id="temp" className=" text-center" >
                        {Math.round(weather.temp)}&deg;C
                    </div>
                    <h3 className="text-center">{weather.city}</h3>

                    <div className="row text-center">
                        <div className="col">
                            <span className=" bi bi-water" style={{fontSize:"50px",color:"black"}}></span> <br/> Humidity <br />{weather.humidity} % 
                        </div>
                        <div className="col">
                            <span className=" bi bi-wind" style={{fontSize:"50px",color:"black"}}> </span><br />  WInd Speed <br /> {weather.speed} km/h
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}
