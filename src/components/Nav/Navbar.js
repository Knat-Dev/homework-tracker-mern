import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
  IconButton,
  SwipeableDrawer,
  Tooltip,
  createMuiTheme
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Brightness4 from "@material-ui/icons/Brightness4";
import Brightness7 from "@material-ui/icons/Brightness7";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavList from "./NavList";
import { ThemeContext } from "../Providers/ThemeProvider";

const useStyles = makeStyles({
  root: {},
  brand: { padding: "1rem 0rem", flexGrow: 1 },
  links: {
    textDecoration: "none"
  },
  items: {
    marginLeft: "1rem"
  }
});

export default function Navbar() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const classes = useStyles();

  const _theme = useTheme();
  const themeMode = _theme.palette.type;
  const [theme, setTheme] = useContext(ThemeContext);

  const matchesDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const toggleDrawer = () => {
    drawerVisible ? setDrawerVisible(false) : setDrawerVisible(true);
  };

  const toggleTheme = () => {
    setTheme(
      createMuiTheme({
        ...theme,
        palette: {
          primary: { ...theme.palette.primary },
          secondary: { ...theme.palette.secondary },
          type: theme.palette.type === "dark" ? "light" : "dark"
        }
      })
    );
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <div className={classes.brand}>
          <NavLink to="/" className={classes.links}>
            <Typography
              color={themeMode === "dark" ? "textPrimary" : "primary"}
              variant="h4"
            >
              Homework Tracker
            </Typography>
          </NavLink>
        </div>
        {matchesDesktop ? (
          <>
            <NavLink to="/add-homework">
              <Tooltip title="Add Homework">
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Tooltip>
            </NavLink>
            <NavLink to="/user/create">
              <Tooltip title="Create User">
                <IconButton>
                  <AccountCircleIcon />
                </IconButton>
              </Tooltip>
            </NavLink>
            <Tooltip title="Toggle Theme">
              <IconButton onClick={toggleTheme}>
                {themeMode === "dark" ? <Brightness4 /> : <Brightness7 />}
              </IconButton>
            </Tooltip>
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
