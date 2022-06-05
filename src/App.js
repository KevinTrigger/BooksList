import "./App.css";
import { useEffect, useState } from "react";
import BooksBoard from "./components/BooksBoard";
import Button from "./components/Button";
import Input from "./components/Input";
import CounterBooks from "./components/CounterBooks";

function App() {
  const [currentAuthor, setCurrentAuthor] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books")) || []
  );
 
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addedField = {
    author: currentAuthor,
    title: currentTitle,
  };

  const onAdd = () => {
    if (currentAuthor.length && currentTitle.length !== 0) {
      setBooks([...books, addedField]);
    } else {
      alert("Проверьте правильность заполнения полей");
    }
    setCurrentAuthor("");
    setCurrentTitle("");
  };

  const onDelete = (index) => {
    setBooks(books.filter((item, id) => id !== index));
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-slate-50">
      <BooksBoard books={books} onDelete={onDelete}/>
      <CounterBooks countBooks={books.length} />
      <form className="extra-sm:w-11/12 md:w-96 flex flex-col mt-7" method="get" action="reset">
      <Input setValue={setCurrentAuthor} placeholder={"Author"} />
        <Input setValue={setCurrentTitle} placeholder={"Title of book"} />
        <Button onAdd={onAdd} />
    </form>
    </div>
  );
}

export default App;
