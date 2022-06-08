import React from "react";

function Input({ setValue, placeholder }) {
  return (
    <input
      onChange={(e) => setValue(e.target.value)}
      className="w-full p-2 rounded-md bg-slate-200 text-stone-800 focus:outline-none font-bold mt-2"
      type="text"
      placeholder={placeholder}
    />
  );
}

export default Input;
