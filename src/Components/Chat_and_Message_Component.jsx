import React, { useState, useMemo } from "react";
import ChartsContainer from "./ChartsContainer";
import MessageContainer from "./MessageContainer";

const Chat_and_Message_Component = () => {
  const [chatSelected, setChatSelected] = useState({});
  const memoComponent = useMemo(() => {
    return (
      <ChartsContainer
        chatSelected={chatSelected}
        setChatSelected={setChatSelected}
      />
    );
  }, []);

  return (
    <>
      {memoComponent}
      <MessageContainer
        chatSelected={chatSelected}
        setChatSelected={setChatSelected}
      />
    </>
  );
};

export default Chat_and_Message_Component;
