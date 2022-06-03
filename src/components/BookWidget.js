import React from "react";
import CrossDelete from "../images/cross-delete.svg";

function BookWidget({author, title, keyOfBook, deleteBook}) {

  let titleQuote = `'${title}'`;

    return (
      <div className='flex flex-row justify-around wrap relative mt-2'>
        <input className="bg-transparent text-center hover:cursor-pointer active:outline active:outline-offset-2 active:outline-1 w-96" value={author} />
        <input className="italic bg-transparent text-center hover:cursor-pointer active:outline active:outline-offset-2 active:outline-1 w-96" value={titleQuote}/>
        <img onClick={() => deleteBook(keyOfBook)} className="absolute right-0 top-2 w-4 h-4 hover:cursor-pointer hover:rotate-180 hover:ease-linear hover:duration-300" src={CrossDelete} alt="Delete field" />
      </div>
    )
}

export default BookWidget;