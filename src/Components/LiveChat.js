import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { generateNames, generateRandomMessages } from "../utils/helper";
import { addMessage } from "../utils/Slices/chatSlice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateNames(),
          message: generateRandomMessages(30),
        })
      );
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          <ChatMessage />
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Mohsin Murtaza",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="w-full p-2 ml-2 border border-black flex rounded-lg"
      >
        <input
          className="w-full border border-black rounded-lg"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
        />
        <button className="px-2 mx-2 bg-green-500 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
