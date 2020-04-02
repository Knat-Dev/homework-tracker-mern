import React, { useState } from "react";
import axios from "axios";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  FormControl,
  TextField,
  Button
} from "@material-ui/core";
const useStyles = makeStyles({
  fullScreen: {
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    padding: "1rem",
    textAlign: "center"
  }
});

export default function CreateUser(props) {
  const [username, setUsername] = useState("");
  const classes = useStyles();

  const onSubmit = e => {
    e.preventDefault();
    const user = {
      username
    };
    console.log(user);
    axios
      .post("http://localhost:4000/users/add", user)
      .then(res => console.log(res.data));
    setUsername("");
  };

  return (
    <div className={classes.fullScreen}>
      <Card elevation={6}>
        <CardContent>
          <Typography variant="h4" className={classes.title}>
            Create User
          </Typography>
          <form onSubmit={onSubmit}>
            <FormControl fullWidth>
              <TextField
                value={username}
                onChange={e => setUsername(e.target.value)}
                label="Username"
                required={true}
              />
            </FormControl>
            <FormControl fullWidth>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
