import React from "react";
import { useState } from "react";
import {
  FormControl,
  TextField,
  makeStyles,
  Button,
  useTheme,
  useMediaQuery,
  Select,
  MenuItem
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useEffect } from "react";

const useStyles = makeStyles({
  form: {
    padding: "1rem"
  }
});

export default function HomeworkForm(props) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedDuration, setEstimatedDuration] = useState(0);
  const [dueDate, setDueDate] = useState(new Date());
  // temp
  const [users, setUsers] = useState([]);

  //Theme stuff
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    setUsers(["Test User"]);
    setUsername("Test User");
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit(
      props.onSubmit({
        username,
        description,
        estimatedDuration,
        dueDate
      })
    );
  };

  return (
    <div className={classes.form}>
      <form onSubmit={onSubmit} style={{ maxWidth: "460px" }}>
        <FormControl fullWidth margin="dense">
          <Select value={username} onChange={e => setUsername(e.target.value)}>
            {users.length > 0 &&
              users.map(user => (
                <MenuItem key={user} value={user}>
                  {user}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            value={description}
            onChange={e => setDescription(e.target.value)}
            label={"Description"}
            required={true}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            value={estimatedDuration}
            onChange={e =>
              setEstimatedDuration(
                e.target.value !== "" ? parseInt(e.target.value) : 0
              )
            }
            label={"Estimated Duration (Minutes)"}
            required={true}
          />
        </FormControl>
        <FormControl fullWidth>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              variant={matchesDesktop ? "inline" : "dialog"}
              label="Due Date"
              value={dueDate}
              onChange={setDueDate}
              format="dd/MM/yyyy"
              margin="normal"
            />
          </MuiPickersUtilsProvider>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <Button type="submit" color="primary" variant="contained" fullWidth>
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
