import { ITask } from "../state/state";
import { doneLoading, loadingTasks, UPDATE_TASKS } from "./taskActionCreator";
import axios from "axios";
import { interval, map, Subject, switchMap, takeUntil, takeWhile } from "rxjs";
export const subject: Subject<any> = new Subject();

export const testSubject = () => {
  return (dispatch: Function, getState: Function) => {
    subject
      .pipe(
        switchMap((val) => {
          return axios.get("https://jsonplaceholder.typicode.com/posts");
        }), // switchMap ==> axios.get ==> map
        map(({ data }) => dispatch(loadTasksEffect(data)))
      )
      .subscribe();
  };
};

export const nextSubject = () => {
  subject.next(2);
};

export const activeInterval = () => {
  return (dispatch: Function, getState: Function) => {
    const inter = interval(2000)
      .pipe(
        // map(() => {
        //   if (getState().counter > 10) inter.unsubscribe();
        // })
        takeWhile(() => getState().counter < 11)
      )
      .subscribe(() => {
        subject.next(1);
      });
  };
};

export const loadTasksEffect =
  (data: Array<any>) => async (dispatch: Function, getState: Function) => {
    dispatch(loadingTasks());
    const headData = data.splice(0, 1);
    const tasks = convertToTasks(headData, getState().nextId);
    console.log(tasks[0]);
    dispatch(updateTasks(tasks));
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

export const updateTasks = (
  tasks: ITask[]
): { type: string; payload: ITask[] } => {
  return {
    type: UPDATE_TASKS,
    payload: tasks,
  };
};
