import React from "react";
import CrossDelete from "./CrossDelete";

function BookWidget({ author, title, index, onDelete, books, setBooks }) {
  
  const handlerAuthor = (e) => {
    setBooks([...books], (books[index].author = e.target.value));
  };

  const handlerTitle = (e) => {
    setBooks([...books], (books[index].title = e.target.value));
  };

  return (
    <div
      className="flex flex-row justify-around wrap relative mt-2"
      key={index}
    >
      <input
        onChange={handlerAuthor}
        className="bg-transparent text-center hover:cursor-pointer active:outline active:outline-offset-2 active:outline-1 w-96"
        value={author}
      />
      <input
        onChange={handlerTitle}
        className="italic bg-transparent text-center hover:cursor-pointer active:outline active:outline-offset-2 active:outline-1 w-96"
        value={`${title}`}
      />
      <CrossDelete onDelete={onDelete} index={index} />
    </div>
  );
}

export default BookWidget;
