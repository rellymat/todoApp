export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

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
