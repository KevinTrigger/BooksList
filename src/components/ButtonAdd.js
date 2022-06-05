import React from "react";

function ButtonAdd({onAdd}) {

  return (
    <button
          type="reset"
          onClick={() => onAdd()}
          className="p-2 rounded-md bg-stone-800 text-white focus:outline-none font-bold mt-2 text-center select-none hover:bg-amber-600 hover:duration-200 hover:ease-linear active:relative active:top-px active:duration-150 active:ease-linear active:shadow-xl"
        >
          Add book
        </button>
  );
}

export default ButtonAdd;
