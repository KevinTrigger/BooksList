import React from "react";
import CrossDelete from "./CrossDelete";
import InputWidget from "./InputWidget";

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
      <InputWidget value={author} onEdit={handlerAuthor} />
      <InputWidget value={title} onEdit={handlerTitle} />
      <CrossDelete onDelete={onDelete} index={index} />
    </div>
  );
}

export default BookWidget;
