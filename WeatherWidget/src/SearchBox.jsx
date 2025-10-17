import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

function SearchBox({updateInfo}) {
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="e9fc778d4fdec4e862e24f63f74d5af3";
    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse=await response.json();
        let result={
            city:city,
            temp: jsonresponse.main.temp,
            tempMin:jsonresponse.main.temp_min,
            tempMax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelsLike:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description,
        }
        return result;
        }catch(err){
            throw err;
        }
    }
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=async(evt)=>{
        try{
            evt.preventDefault();
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
        setError(false);
        }catch(err){
            setError(true);
        }
    }
  return (
    <div className='searchBox'>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br/>
            <br/>
            <Button type="submit" variant="contained">SEARCH</Button>
            {error&&<p style={{color:"red"}}>No such place exists!</p>}
        </form>
    </div>
  )
}

export default SearchBox
