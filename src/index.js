import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import WeatherContainer from './Containers/WeatherAppContainer';

ReactDOM.render(<WeatherContainer />, document.getElementById('root'));

serviceWorker.unregister();
