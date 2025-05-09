import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function Searchbox({ updateInfo }) {
    let [city, setCity] = useState("")
    let [err, setErr] = useState(false)
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    const API_KEY = "61ed38c81b1bf6ad470bf79c0a0ed8bf";

    let getWeatherInfo = async () => {
        try {
            let reponse = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await reponse.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,


            }
            console.log(result)
            return result;


        } catch (err) {
            throw err;
        }

    }


    let hanleChange = (event) => {
        setCity(event.target.value)

    }
    let onSubmit = async (evt) => {
        try {
            evt.preventDefault();
            setErr(false)
            
            console.log(city)
            setCity("")
            let info = await getWeatherInfo();
            updateInfo(info)
        } catch (err) {
            setErr(true)

        }
    }



    return (

        <div className='SBox'>

            <form onSubmit={onSubmit}>
                <TextField id="City"
                    label="City Name"

                    variant="outlined" required
                    value={city}
                    onChange={hanleChange} />
                <br />
                <br />
                <Button
                    variant="contained"
                    type="Search">
                    Search
                </Button>
                {err && <p style={{ color: "red" }}>No such place exist</p>}
            </form>
        </div>
    )
}