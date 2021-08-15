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
  counter: 0,
  nextId: 1,
  loading: false,
  tasks: [],
};
