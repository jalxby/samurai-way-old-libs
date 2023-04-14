import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { HeaderPropsType } from "./HeaderContainer";
import { Preloader } from "../../Common/Preloader/Preloader";

const Header = (props: HeaderPropsType) => {
  const isAused = props.isFetching ? (
    <Preloader size={30} />
  ) : props.isAused ? (
    props.login
  ) : (
    <Button color="inherit">Login</Button>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <NavLink to={"/auth"}>{isAused}</NavLink>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
