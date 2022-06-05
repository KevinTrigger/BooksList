import React from "react";
import CrossDelete from "./CrossDelete";


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
      <CrossDelete onDelete={onDelete} index={index}/>
    </div>
  );
}

export default BookWidget;
