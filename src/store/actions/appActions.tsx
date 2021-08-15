import { map, switchMap } from "rxjs";
import axios from "axios";
import { loadTasksEffect, subject } from "./rxjsAction";
import { ITask } from "../state/state";

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const updateTaskEffect = (id: number) => {
  return async (dispatch: Function, getState: Function) => {
    try {
      const status = getState().tasks.filter((task: ITask) => task.id === id)[0]
        .status;
      await axios.put(`http://localhost:3000/tasks/updateTask/${id}`, {
        status: status,
      });
      dispatch(updateTask(id));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteTaskEffect = (id: number) => {
  return async (dispatch: Function, getState: Function) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/deleteTask/${id}`);
      dispatch(deleteTask(id));
    } catch (e) {
      console.log(e);
    }
  };
};

export const addTask = (task: string): { type: string; payload: string } => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (id: number): { type: string; payload: number } => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const updateTask = (id: number): { type: string; payload: number } => {
  return {
    type: UPDATE_TASK,
    payload: id,
  };
};
