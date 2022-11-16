import React from "react";
import "./current-weather.css";


const CurrentWeather = ({ data }) => {
   return (
      <div className="weather">
         <div className="top">
            <div>
               <p className="city">{data.city}</p>
               <p className="weather-description">{data.weather[0].description}</p>
            </div>
            <img alt="weather" className="weather-icon" src={`./icons/${data.weather[0].icon}.png`} />
         </div>
         <div className="bottom">
            <div>
               <span className="temperatureDigits">{Math.round(data.main.temp)}</span>
               <span className="temperatureType">&#8457;</span>
            </div>

            <div className="details">
               <div className="parameter-row">
                  <span className="parameter-header"><br /></span>
               </div>
               <div className="parameter-row">
                  <span className="parameter-label">Feels like:</span>
                  <span className="parameter-value">66&#8457;</span>
               </div>
               <div className="parameter-row">
                  <span className="parameter-label">Wind:</span>
                  <span className="parameter-value">20</span>
               </div>
               <div className="parameter-row">
                  <span className="parameter-label">Humidity:</span>
                  <span className="parameter-value">20&#37;</span>
               </div>
               <div className="parameter-row">
                  <span className="parameter-label">Pressure:</span>
                  <span className="parameter-value">20&#37;</span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CurrentWeather;