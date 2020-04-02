import React from "react";
import {
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  makeStyles
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: "275px"
  }
});

export default function NavList({ toggleDrawer }) {
  const classes = useStyles();
  return (
    <div className={classes.list} onClick={toggleDrawer}>
      <List component="nav" aria-label="main drawer">
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="/user/create"
        >
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Create User" />
          </ListItem>
        </Link>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="/add-homework"
        >
          <ListItem button>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Homework" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
