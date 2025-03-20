import React from "react";

function Button({color, btnName, setColor}) {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    >
      {btnName}
    </button>
  );
}

export default Button;
