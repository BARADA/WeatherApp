import React, { useState, useEffect } from 'react';
import Info from '../Components/Info';
import Form from '../Components/Form';
import NavBarContainer from './NavBarContainer';
import { OpenWeatherMapAPI, APIXUAPI } from '../DAL/API';
import { LocalStorageSave, LocalStorageSaveAPI } from '../DAL/LocalStorageSave';
import style from '../Styles/WeatherContainer.module.css';


const WeatherContainer = () => {
// State storage
    let [value, setValue] = useState('');
    let [APIWeather, setAPIWeather] = LocalStorageSaveAPI('CheckedAPI');
    let [loading, setLoading] = useState(false);
    let [state, setState] = LocalStorageSave(APIWeather);
// New request two hours later
    let twoHours = 7200;
    let newDate = Date.parse(new Date());
    let lastDate = Date.parse(state.date) + twoHours;
    let updateWeather = () => {
        if (newDate > lastDate) {
            getWeather()
        }
    };
    useEffect(updateWeather, [])
// Calling up new data from the server
    let getWeather = (cityName = state.city, api = APIWeather) => {
        switch (api) {
            case 'OpenWeatherMap':
                setLoading(true)
                OpenWeatherMapAPI(cityName)
                    .then(res => setState(res))
                    .then(() => setLoading(false))
                    .then(() => setValue(''))
                    .catch(error => setState({ error }))
                break;
            case 'APIXU':
                setLoading(true)
                APIXUAPI(cityName)
                    .then(res => setState(res))
                    .then(() => setLoading(false))
                    .then(() => setValue(''))
                    .catch(error => setState({ error }));
                break;
            default: return;
        }
    }

    // Dispatching the city to the API
    let setWeather = e => {
        e.preventDefault();
        let api = e.target.elements.checkedWeather.value;
        setAPIWeather(api);
        getWeather(value, api)
    }
    // Temporary storage of input data
    let changeValue = e => setValue(e.target.value);

    return (<div className={style.weather}>
        <Form getWeatherInfo={setWeather} changeValue={changeValue}
            valueinput={value} loading={loading} API={APIWeather} />
        <div className={style.result}>
            <Info state={state} />
            <NavBarContainer nameApi={APIWeather} /> 
        </div>
    </div>
    )
}

export default WeatherContainer;