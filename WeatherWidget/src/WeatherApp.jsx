import React,{useState} from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike: 29.45,
        humidity: 65,
        temp: 27.65,
        tempMax: 27.65,
        tempMin: 27.65,
        weather: "clear sky"
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
  return (
    <div style={{textAlign:"center"}}>
      <h2>Weather App by Sanchita</h2>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
