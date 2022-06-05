import React, { useEffect } from "react";
import CrossDelete from "../images/cross-delete.svg";
import { useState } from "react";

function BookWidget({ author, title, index, onDelete }) {
  return (
    <div
      className="flex flex-row justify-around wrap relative mt-2"
      key={index}
    >
      <input
        onChange={(e) => console.log(e.target.value)}
        className="bg-transparent text-center hover:cursor-pointer active:outline active:outline-offset-2 active:outline-1 w-96"
        value={author}
      />
      <input
        onChange={(e) => console.log(e.target.value)}
        className="italic bg-transparent text-center hover:cursor-pointer active:outline active:outline-offset-2 active:outline-1 w-96"
        value={`"${title}"`}
      />
      <img
        onClick={() => onDelete(index)}
        className="absolute right-0 top-2 w-4 h-4 hover:cursor-pointer hover:rotate-180 hover:ease-linear hover:duration-300"
        src={CrossDelete}
        alt="Delete field"
      />
    </div>
  );
}

export default BookWidget;
