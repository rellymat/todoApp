import { IState, appInitState, ITask } from "../state/state";
import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "../actions/appActions";
import {
  DONE_LOADING,
  LOADING_TASKS,
  UPDATE_TASKS,
} from "../actions/taskActionCreator";

const appReducer = (
  state: IState = appInitState,
  action: { type: String; payload?: number | string | ITask[] }
) => {
  switch (action.type) {
    case ADD_TASK: {
      const newTask = {
        id: state.nextId,
        task: action.payload as string,
        status: false,
      };
      const tasks = state.tasks.concat(newTask);

      return {
        ...state,
        counter: ++state.counter,
        nextId: ++state.nextId,
        tasks,
      };
    }

    case DELETE_TASK: {
      const counter = --state.counter;
      const tasks = state.tasks.filter((task) => task.id !== action.payload);
      return {
        ...state,
        counter,
        tasks,
      };
    }

    case UPDATE_TASK: {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload
      )! as number;

      const updateTask = {
        ...state.tasks[taskIndex],
        status: !state.tasks[taskIndex].status,
      };

      const newTasks = [...state.tasks];
      newTasks.splice(taskIndex, 1, updateTask);

      return {
        ...state,
        tasks: newTasks,
      };
    }

    case LOADING_TASKS: {
      return {
        ...state,
        loading: true,
      };
    }

    case DONE_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }

    case UPDATE_TASKS: {
      const newTasks = action.payload as ITask[];
      const tasks = [...state.tasks, ...newTasks];
      return {
        ...state,
        counter: state.counter + newTasks.length,
        nextId: state.nextId + newTasks.length,
        tasks,
      };
    }

    default:
      return state;
  }
};

export default appReducer;
