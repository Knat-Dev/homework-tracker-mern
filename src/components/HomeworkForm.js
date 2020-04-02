import React from "react";
import { useState } from "react";
import {
  FormControl,
  TextField,
  makeStyles,
  Button,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

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
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div className={classes.form}>
      <form onSubmit={props.onSubmit} style={{ maxWidth: "460px" }}>
        <FormControl fullWidth margin="normal">
          <TextField
            value={username}
            onChange={e => setUsername(e.target.value)}
            label={"Username"}
            required={true}
          />
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
            onChange={e => setEstimatedDuration(e.target.value)}
            label={"Estimated Duration"}
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
          <Button color="primary" variant="contained" fullWidth>
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
