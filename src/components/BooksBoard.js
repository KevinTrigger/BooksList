import BookWidget from "./BookWidget";
import HeaderBoard from "./HeaderBoard";

function BooksBoard({ books, onDelete, setBooks }) {
  return (
    <div className="extra-sm:w-11/12 extra-sm:text-xs md:text-base md:w-2/3 h-96 border-2 border-slate-600 rounded-xl py-3 px-4 overflow-auto scrollbar">
      <HeaderBoard />
      {books.map((elem, index) => {
        return (
          <div key={index}>
            <BookWidget
              books={books}
              setBooks={setBooks}
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
