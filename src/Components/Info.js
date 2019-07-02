import React from 'react';
import style from '../Styles/Info.module.css';

const Info = ({ state, name}) => {
    return (
        <div className={style.info}>
            {state.error === '' ? <div className={style.result}>
                <h3>{state.city} <span>{state.country}</span></h3>
                <div className={style.infoResult}><div>Температура воздуха:</div><span>{state.temp} &deg;C</span></div>
                <div className={style.infoResult}><div>Влажность воздуха:</div><span>{state.humidity} %</span></div>
                <div className={style.infoResult}><div>Скорость ветра:</div><span>{state.wind} м/с</span></div>
                <div className={style.infoResult}><div>Давление:</div><span>{state.pressure} мм</span></div>
            </div> : <div className={style.result}><h3>Город не найден!</h3></div>}
        </div>
    );
}

export default Info;