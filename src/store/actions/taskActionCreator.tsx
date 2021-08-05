import { ITask } from "../state/state";

export const LOADING_TASKS = "LOADING_TASKS";
export const DONE_LOADING = "DONE_LOADING";
export const UPDATE_TASKS = "UPDATE_TASKS";

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
