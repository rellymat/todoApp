import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../store/selectors/tasksSelectors";
import { ITask } from "../store/state/state";
import { deleteTask, updateTask } from "../store/actions/appActions";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const rows = useSelector(getTasks);
  const dispatch = useDispatch();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>number</StyledTableCell>
            <StyledTableCell align="center">task</StyledTableCell>
            <StyledTableCell align="center">completed</StyledTableCell>
            <StyledTableCell align="center">delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((task: ITask, index: number) => (
            <StyledTableRow key={task.id}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="center">{task.task}</StyledTableCell>
              <StyledTableCell
                align="center"
                onClick={() => dispatch(updateTask(task.id))}
                style={{ cursor: "pointer" }}
              >
                {task.status ? "Yes" : "No"}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => dispatch(deleteTask(task.id))}
                >
                  delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
