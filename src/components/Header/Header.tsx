import React from 'react';
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <img src={"https://www.imgacademy.com/sites/default/files/2020-img-cup-boys-invite-logo.png"}
                 alt={"logo"}/>
        </header>
    );
};

export default Header;