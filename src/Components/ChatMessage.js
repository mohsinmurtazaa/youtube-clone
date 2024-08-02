import React from "react";
import { useSelector } from "react-redux";

const ChatMessage = () => {
  const messages = useSelector((store) => store.chat.messages);
  return (
    <>
      {messages &&
        messages.map((msg) => (
          <div className="flex items-center shadow-lg p-2" key={msg}>
            <img
              className="h-8"
              src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
              alt="user profile"
            />
            <span className="font-bold px-2">{msg.name}</span>
            <span>{msg.message}</span>
          </div>
        ))}
    </>
  );
};

export default ChatMessage;
