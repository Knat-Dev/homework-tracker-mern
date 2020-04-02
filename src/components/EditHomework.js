import React from "react";
import { Typography } from "@material-ui/core";

export default function EditHomework(props) {
  return (
    <div>
      <Typography variant="h4">
        Edit Homework: (id: {props.match.params.id})
      </Typography>
    </div>
  );
}
