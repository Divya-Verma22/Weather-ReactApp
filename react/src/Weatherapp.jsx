import SearchBox from "./Searchbox"
import InfoBox from "./Infobox"
// import "./Weatherapp.css"
import { useState } from "react"
import "./style.css"

export default function Weather(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 29.93,
        humidity: 18,

        temp: 32.05,
        tempMax: 32.05,
        tempMin: 32.05,
        weather: "haze",
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox info= {weatherInfo}/>

       
        </div>
    )
}