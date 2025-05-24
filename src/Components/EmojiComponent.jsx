import React from "react";
import "./emojicomponent.css";
const emojis = [
  "😀",
  "😂",
  "😍",
  "😎",
  "😭",
  "😡",
  "👍",
  "🙏",
  "🔥",
  "💯",
  "🎉",
  "❤️",
  "🤔",
  "🤯",
  "😴",
  "😬",
  "😅",
  "🙌",
  "💔",
  "🎂",
  "😇",
  "😤",
  "🤩",
  "🫶",
  "😜",
  "👀",
  "🤗",
];

export default function EmojiComponent({ onSelect }) {
  return (
    <div className="emoji-container">
      {emojis.map((emoji, index) => (
        <button
          key={index}
          className="emoji-button"
          onClick={() => onSelect(emoji)}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
}

/*Emoj component usage

import EmojiContainer from "./EmojiContainer";

function ChatInput() {
  const [message, setMessage] = React.useState("");

  const handleEmojiSelect = (emoji) => {
    setMessage((prev) => prev + emoji);
  };

  return (
    <div>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <EmojiContainer onSelect={handleEmojiSelect} />
    </div>
  );
}
 */
