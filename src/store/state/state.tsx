export interface ITask {
  id: number;
  task: string;
  status: boolean;
}

export interface IState {
  counter: number;
  nextId: number;
  loading: boolean;
  tasks: ITask[];
}

export const appInitState: IState = {
  counter: 1,
  nextId: 2,
  loading: false,
  tasks: [{ id: 1, task: "learn react", status: false }],
};
