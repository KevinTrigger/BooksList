import BookWidget from "./BookWidget";

function BooksBoard({arrBooks, deleteBook}) {
  
  return (
    <div className='w-2/3 h-96 border-2 border-slate-600 rounded-xl py-3 px-4 overflow-auto scrollbar'>
      <div className="flex flex-row justify-around uppercase font-semibold border-b border-solid border-opacity-40 border-gray-700 pb-2 select-none">
        <span>Author</span>
        <span>Title of book</span>
      </div>
      <div className="my-4">
        {arrBooks.map((elem, index) => {
          return (
            <div>
              <BookWidget author={elem.author} title={elem.title} keyOfBook={index} deleteBook={deleteBook}/>
              <hr className="mt-3 border-solid border-black border-opacity-5"/>
            </div>
          )
          // console.log(arrBooks);
        })}
        
      </div>
    </div>
  )
}

export default BooksBoard;
