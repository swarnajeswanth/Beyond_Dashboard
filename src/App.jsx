import React from "react";
import ChartsContainer from "./Components/ChartsContainer";
import AiContainer from "./Components/AiContainer";
import MessageContainer from "./Components/MessageContainer";
import "./App.css";

const App = () => {
  return (
    <div className="AppContainer">
      <ChartsContainer />
      <MessageContainer />
      <AiContainer />
    </div>
  );
};

export default App;
