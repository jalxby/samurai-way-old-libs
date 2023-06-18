import MenuIcon from "@mui/icons-material/Menu";
import { LinearProgress } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { NavLink } from "react-router-dom";
import { Preloader } from "../../common/Preloader/Preloader";
import s from "./Header.module.css";
import { HeaderPropsType } from "./HeaderContainer";

const Header = (props: HeaderPropsType) => {
  const isAuth = props.isFetching ? (
    <Preloader size={30} />
  ) : props.isAuth ? (
    <div>
      <div>{props.login}</div>
      <Button color="inherit" onClick={props.logout}>
        Logout
      </Button>
    </div>
  ) : (
    <NavLink color="inherit" to={"/login"}>
      Login
    </NavLink>
  );

  return (
    <>
      <AppBar className={s.header} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to={"/login"}>{isAuth}</NavLink>
        </Toolbar>
        <div>{props.isFetching && <LinearProgress />}</div>
      </AppBar>
    </>
  );
};

export default Header;
