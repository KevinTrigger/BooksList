import BookWidget from "./BookWidget";

function BooksBoard({ books, onDelete }) {
  return (
    <div className="w-2/3 h-96 border-2 border-slate-600 rounded-xl py-3 px-4 overflow-auto scrollbar">
      <div className="flex flex-row justify-around uppercase font-semibold border-b border-solid border-opacity-40 border-gray-700 pb-2 select-none">
        <span>Author</span>
        <span>Title of book</span>
      </div>

      {/* Перебирать не books, а localStorage */}

      {books.map((elem, index) => {
        return (
          <div key={index}>
            <BookWidget
              author={elem.author}
              title={elem.title}
              index={index}
              onDelete={onDelete}
            />
            <hr className="mt-3 border-solid border-black border-opacity-5" />
          </div>
        );
      })}
    </div>
  );
}

export default BooksBoard;
