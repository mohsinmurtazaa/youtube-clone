import React from "react";
import Button from "./Button";
const list = ["All", "javaScript", "jQuery", "React Js", "Vue Js", "Laravel"];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
