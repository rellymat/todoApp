import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../store/actions/appActions";
import { getTasks } from "../store/selectors/tasksSelectors";
import { ITask } from "../store/state/state";

const trhStyle = {
  borderBottom: "3px solid black",
};

const cellStyle: React.CSSProperties = {
  border: "2px solid yellow",
  padding: "10px",
  textAlign: "center",
};

const cursorS = {
  cursor: "pointer",
};

export const Table: React.FC = () => {
  const tasks = useSelector(getTasks);
  const nextId = useSelector((state: any) => state.nextId);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        position: "relative",
        width: "fit-content",
        margin: "0 auto",
        paddingBottom: "10px",
      }}
    >
      <table
        style={{
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={trhStyle}>
            <th>number</th>
            <th>task</th>
            <th>completed</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task: ITask, index: number) => {
            return (
              <tr key={index}>
                <td style={cellStyle}>{index + 1}</td>
                <td style={cellStyle}>{task.task}</td>
                <td
                  style={{ ...cellStyle, ...cursorS }}
                  onClick={() => dispatch(updateTask(task.id))}
                >
                  {task.status ? "Yes" : "No"}
                </td>
                <td style={cellStyle}>
                  <button onClick={() => dispatch(deleteTask(task.id))}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
