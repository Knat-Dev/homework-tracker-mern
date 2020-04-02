import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Link,
  CircularProgress,
  makeStyles,
  Typography
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Axios from "axios";
import moment from "moment";

export default function HomeworkTable() {
  const [homework, setHomework] = useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    async function fetchHomework() {
      await Axios.get("http://localhost:4000/homework")
        .then(res => {
          setHomework(res.data);
        })
        .catch(e => console.error(e));
    }
    fetchHomework();
  }, []);

  const handleDeleteHomework = id => {
    setLoading(true);
    Axios.delete(`http://localhost:4000/homework/${id}`)
      .then(res => {
        console.log(res.data);
        const filteredHomework = homework.filter(homework => {
          return homework._id !== id;
        });
        setHomework(filteredHomework);
        setLoading(false);
      })
      .catch(e => console.error(e));
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Username</TableCell>
              <TableCell align="right">Estimated Duration</TableCell>
              <TableCell align="right">Due Date</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {homework.length > 0 &&
              homework.map(hw => (
                <TableRow key={hw._id} hover={true}>
                  <TableCell component="th" scope="row">
                    {hw.description}
                  </TableCell>
                  <TableCell>{hw.username}</TableCell>
                  <TableCell align="right">
                    {hw.estimatedDurationMinutes}
                  </TableCell>
                  <TableCell align="right">
                    {moment(hw.dueDate).format("MMMM D, YYYY hh:mmA")}
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <Button
                        onClick={() => handleDeleteHomework(hw._id)}
                        startIcon={<DeleteIcon />}
                        color="secondary"
                        variant="outlined"
                        disabled={loading}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {homework.length === 0 && (
        <Typography align="center" style={{ padding: "1.5rem 0" }}>
          No Homework! WOO HOO !!
        </Typography>
      )}
    </>
  );
}
