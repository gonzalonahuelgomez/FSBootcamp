import axios from "axios"
import { useState, useEffect } from "react"

const Weather = ({capital,lat,lng}) => {
    const api_key = process.env.REACT_APP_API_KEY
    // const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`
    const [weather, setWeather] = useState({})

    useEffect(() => {
        axios
            .get(weatherUrl)
            .then(response => {
                setWeather(response.data)
            })
        }, [])

    if(weather.main !== undefined){
        return(
            <>
                <h2>Weather in {capital}</h2>
                <p>temperature {weather.main.temp} Celsius</p>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`${weather.weather[0].description}`}/>
                <p>wind {weather.wind.speed} m/s</p>
            </>
        )
    } 
    else return <p></p>
}

export default Weather