import React from 'react';
import style from '../Styles/Form.module.css';

const Form = (props) => {
    let { getWeatherInfo, valueinput, changeValue, loading, API } = props;
    return (
        <div className={style.form}>
            <form onSubmit={getWeatherInfo}>
                <h3>Выберите сервис</h3>
                <div className={style.checkedWeather}>
                    <label>
                        <div className={style.input}>
                            <input type='radio' name='checkedWeather' value='OpenWeatherMap' defaultChecked={API === 'OpenWeatherMap'} />
                            <div className={style.label}>OpenWeatherMap</div>
                        </div>
                    </label>
                    <label>
                        <div className={style.input}>
                            <input type='radio' name='checkedWeather' value='APIXU' defaultChecked={API === 'APIXU'} />
                            <div className={style.label}>APIXU</div>
                        </div>
                    </label>
                </div>
                    <div className={style.inputCity}>
                        <input type='text' name='city' onChange={changeValue} value={valueinput} placeholder='город' />
                        <button disabled={loading}>Узнать</button>
                    </div>
            </form>
        </div>
    );
}
export default Form;