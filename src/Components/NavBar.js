import React from 'react';
import style from '../Styles/NavBar.module.css';


const NavBar = ({name, nameApi}) => {
    return (
        <div className={style.navbar}>
            <span>Текущее местоположение - </span>{name}<br/>
            <span>Выбранный сервис - </span>{nameApi}<br/>
        </div>
    )
}

export default NavBar;