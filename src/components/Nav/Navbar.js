import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
  IconButton,
  SwipeableDrawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavList from "./NavList";

const useStyles = makeStyles({
  root: {},
  brand: { padding: "1rem 0rem", flexGrow: 1 },
  links: {
    color: "#333",
    textDecoration: "none"
  },
  items: {
    marginLeft: "1rem"
  },
  active: {
    color: "rgb(63,81,181)"
  }
});

export default function Navbar() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const classes = useStyles();
  const theme = useTheme();

  const matchesDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const toggleDrawer = () => {
    drawerVisible ? setDrawerVisible(false) : setDrawerVisible(true);
  };

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <div className={classes.brand}>
          <NavLink to="/" className={classes.links}>
            <Typography color="primary" variant="h4">
              Worx
            </Typography>
          </NavLink>
        </div>
        {matchesDesktop ? (
          <>
            <NavLink
              activeClassName={classes.active}
              to="/add-homework"
              className={classes.links + " " + classes.items}
            >
              Add Homework
            </NavLink>
            <NavLink
              activeClassName={classes.active}
              to="/user/create"
              className={classes.links + " " + classes.items}
            >
              Create User
            </NavLink>
          </>
        ) : (
          <>
            <IconButton onClick={toggleDrawer} color={"primary"}>
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              disableSwipeToOpen={false}
              anchor="left"
              onOpen={toggleDrawer}
              open={drawerVisible}
              onClose={toggleDrawer}
            >
              <NavList toggleDrawer={toggleDrawer} />
            </SwipeableDrawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
