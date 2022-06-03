import './App.css';
import { useState } from 'react';
import BooksBoard from './components/BooksBoard';


function App() {

  const [currentAuthor, setCurrentAuthor] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [arrBooks, setArrBooks] = useState([]);

  const addBook = () => {
    (currentAuthor.length === 0 || currentTitle.length === 0)? alert('Проверьте правильность заполнения полей') : 
    setArrBooks([...arrBooks, {
      author: currentAuthor,
      title: currentTitle
    }]);
  }

  const deleteBook = (indexDelete) => {
    setArrBooks(arrBooks.filter((item, id) => id !== indexDelete));
  }

  return (
    <div className=' min-h-screen min-w-screen flex flex-col justify-center items-center'>
    <BooksBoard arrBooks={arrBooks} deleteBook={deleteBook}/>
    <form className='flex flex-col' method="get">
      <input onChange={(e) => setCurrentAuthor(e.target.value)} className='p-2 rounded-md bg-blue-200 text-stone-800 focus:outline-none font-bold mt-2 w-96' type="text" placeholder='Author (L.Name F.Name)'/>
      <input onChange={(e) => setCurrentTitle(e.target.value)} className='p-2 rounded-md bg-blue-200 text-stone-800 focus:outline-none font-bold mt-2 w-96' type="text" placeholder='Title of book'/>
      <a onClick={() => addBook()} className='p-2 rounded-md bg-stone-800 text-white focus:outline-none font-bold mt-2 text-center select-none hover:bg-amber-600 hover:duration-200 hover:ease-linear active:relative active:top-px active:duration-150 active:ease-linear active:shadow-xl'>Add book</a>
    </form>
    </div>
  );
}

export default App;
