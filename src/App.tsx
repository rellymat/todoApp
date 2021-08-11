import React from "react";
import "./App.css";
import RxjsCom from "./components/rxjsCom";
import { Tasks } from "./components/tasks";
import CustomizedTables from "./components/tableMaterial";
import ButtonAppBar from "./components/appBar";

const container: React.CSSProperties = {
  position: "relative",
  width: "fit-content",
  margin: "50px  auto",
};

function App() {
  return (
    <>
      <RxjsCom />
      <ButtonAppBar />
      <div style={container}>
        <CustomizedTables />
        <Tasks />
      </div>
    </>
  );
}

export default App;
