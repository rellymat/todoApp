import { ITask } from "../state/state";

export const getTasks = (state: any) => state.tasks;
export const getCounter = (state: any) => state.counter;
export const getCompleted = (state: any) =>
  state.tasks.filter((task: ITask) => task.status).length;
