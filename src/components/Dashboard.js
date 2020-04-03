import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import HomeworkTable from "./HomeworkTable";

export default function Dashboard() {
  return (
    <div style={{ margin: "4rem 0" }}>
      <Typography align="center" variant="h4" style={{ padding: "2rem 0" }}>
        List of Homework
      </Typography>
      <Card>
        <CardContent>
          <HomeworkTable />
        </CardContent>
      </Card>
    </div>
  );
}
