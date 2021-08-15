import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCompleted, getCounter } from "../store/selectors/tasksSelectors";
import { addTask } from "../store/actions/appActions";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {
  doneLoading,
  loadingTasks,
  updateTasks,
} from "../store/actions/taskActionCreator";
import { ITask } from "../store/state/state";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const tasksStyle: React.CSSProperties = {
  position: "relative",
  width: "fit-content",
};

const addNewTaskEffect =
  (description: string) => async (dispatch: Function, getState: Function) => {
    try {
      await axios.post("http://localhost:3000/tasks/addTask", {
        id: getState().nextId,
        task: description,
        status: false,
      });
      dispatch(addTask(description));
    } catch (e) {
      console.log(e);
    }
  };

const loadTasksEffect =
  () => async (dispatch: Function, getState: Function) => {
    dispatch(loadingTasks());
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const headData = data.splice(0, 10);
      const tasks = convertToTasks(headData, getState().nextId);
      dispatch(updateTasks(tasks));
    } catch (error) {
      console.log(error);
    }
    dispatch(doneLoading());
  };

const convertToTasks = (data: any, nextId: number): ITask[] => {
  const arr: ITask[] = data.map((task: any) => {
    return {
      id: nextId++,
      task: task.title,
      status: false,
    };
  });
  return arr;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      marginRight: theme.spacing(1),
    },
  })
);

export const Tasks: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  const counter = useSelector(getCounter);
  const taskCompletedTotal = useSelector(getCompleted);
  const classes = useStyles();
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addNewTaskEffect(newTask));
    setIsOpen(false);
    setNewTask("");
  };

  const load = () => {
    dispatch(loadTasksEffect());
  };

  return (
    <div style={tasksStyle}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="contained"
        color="primary"
        size="small"
        className={classes.margin}
      >
        create task
      </Button>
      <Button onClick={load} variant="contained" color="primary" size="small">
        load
      </Button>
      {isOpen && (
        <div>
          <Input
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <Button variant="contained" onClick={add} size="small">
            add
          </Button>
        </div>
      )}
      <Typography variant="body2">Number of tasks: {counter}</Typography>
      <Typography variant="body2">
        Number of tasks Completed: {taskCompletedTotal}
      </Typography>
    </div>
  );
};
