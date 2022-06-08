import React from "react";

function HeaderBoard() {
  return (
    <div className="flex flex-row justify-around uppercase font-semibold border-b border-solid border-opacity-40 border-gray-700 pb-2 select-none">
      <span className="ml-4">Author</span>
      <span>Title of book</span>
    </div>
  );
}

export default HeaderBoard;
