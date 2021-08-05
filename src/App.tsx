import React from "react";
import "./App.css";
import { Table } from "./components/table";
import { Tasks } from "./components/tasks";
import CustomizedTables from "./components/tableMaterial";

const container: React.CSSProperties = {
  position: "relative",
  width: "fit-content",
  margin: "50px  auto",
};

function App() {
  return (
    <div style={container}>
      <CustomizedTables />
      <Tasks />
    </div>
  );
}

export default App;
