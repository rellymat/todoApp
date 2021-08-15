import { ITask } from "../state/state";
import axios from "axios";

export const LOADING_TASKS = "LOADING_TASKS";
export const DONE_LOADING = "DONE_LOADING";
export const UPDATE_TASKS = "UPDATE_TASKS";

export const initState =
  () => async (dispatch: Function, getState: Function) => {
    try {
      const { data } = await axios.get("http://localhost:3000/tasks");
      dispatch(updateTasks(convertToTasks(data)));
    } catch (e) {
      console.log(e);
    }
  };

const convertToTasks = (data: Array<any>): ITask[] => {
  return data.map((task) => {
    return { id: task.id, task: task.task, status: task.status };
  });
};

export const loadingTasks = (): { type: string } => {
  return {
    type: LOADING_TASKS,
  };
};

export const doneLoading = (): { type: string } => {
  return {
    type: DONE_LOADING,
  };
};

export const updateTasks = (
  tasks: ITask[]
): { type: string; payload: ITask[] } => {
  return {
    type: UPDATE_TASKS,
    payload: tasks,
  };
};
