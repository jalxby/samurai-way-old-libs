import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Navbar = () => {
    return (
        <div>
            <nav className={s.nav}>


                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <div className={s.item}><NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink></div>
                        <div className={s.item}><NavLink to={'/messages'} activeClassName={s.active}>Messages</NavLink></div>
                        <div className={s.item}><NavLink to={'/news'} activeClassName={s.active}>News</NavLink></div>
                        <div className={s.item}><NavLink to={'/music'} activeClassName={s.active}>Music</NavLink></div>
                        <div className={s.item}><NavLink to={'/users'} activeClassName={s.active}>Users</NavLink></div>
                        <div className={s.item}><NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink></div>
                    </CardContent>

                </Card>


            </nav>
        </div>
    );
};

export default Navbar;