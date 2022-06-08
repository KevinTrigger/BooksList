import React from "react";
import CrossIcon from "../images/cross-delete.svg";

function CrossDelete({onDelete, index}) {
  return (
    <img
      onClick={() => onDelete(index)}
      className="extra-sm:w-3 absolute right-0 top-2 max-w-16 md:w-4 md:h-4 hover:cursor-pointer hover:rotate-180 hover:ease-linear hover:duration-300 active:rotate-180 active:ease-linear active:duration-300"
      src={CrossIcon}
      alt="Delete field"
    />
  );
}

export default CrossDelete;
