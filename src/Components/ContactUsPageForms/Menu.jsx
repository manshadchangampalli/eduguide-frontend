import React from "react";

function Menu({ text, num, setItem, item }) {
  return (
    <div
      onClick={() => setItem(num)}
      className={item === num ? "items active" : "items "}
    >
      <p>{text}</p>
    </div>
  );
}

export default Menu;
