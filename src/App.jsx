import React, { useState } from "react";
import ChartsContainer from "./Components/ChartsContainer";
import AiContainer from "./Components/AiContainer";
import MessageContainer from "./Components/MessageContainer";
import "./App.css";
import Chat_and_Message_Component from "./Components/Chat_and_Message_Component";
const App = () => {
  return (
    <div className="AppContainer">
      <Chat_and_Message_Component />
      <AiContainer />
    </div>
  );
};

export default App;
