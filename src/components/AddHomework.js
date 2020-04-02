import React from "react";
import { Typography, makeStyles, Card, CardContent } from "@material-ui/core";
import HomeworkForm from "./HomeworkForm";

const useStyles = makeStyles({
  fullScreen: {
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    padding: "2rem",
    textAlign: "center"
  }
});

export default function AddHomework() {
  const classes = useStyles();
  const onSubmit = () => {};
  return (
    <div className={classes.fullScreen}>
      <Card elevation={6}>
        <CardContent>
          <Typography variant="h4" className={classes.title}>
            Add Homework:
          </Typography>
          <HomeworkForm onSubmit={onSubmit} />
        </CardContent>
      </Card>
    </div>
  );
}
