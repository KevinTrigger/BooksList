import React from "react";

function InputWidget({ value, onEdit }) {
  return (
    <input
      onChange={onEdit}
      className="extra-sm:w-20 bg-transparent text-center hover:cursor-pointer active:outline active:outline-offset-2 active:outline-1 sm:w-52 md:w-60"
      value={value}
    />
  );
}

export default InputWidget;
