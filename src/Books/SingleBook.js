import React from "react";
import Btn from "./Btn";

function SingleBook({ isFormOpen, booksArr, dispatch }) {
  console.log(isFormOpen);
  return (
    <div>
      {booksArr.map((bookObj) => {
        const { id, bookName, authour } = bookObj;
        return (
          <div className="item" key={bookObj.id}>
            <h5>{id}</h5> <h5>{bookName}</h5> <h5>{authour}</h5>
            <button onClick={() => dispatch({ type: "remove", payload: id })}>
              Remove
            </button>
          </div>
        );
      })}
      {!isFormOpen && <Btn dispatch={dispatch} />}
    </div>
  );
}

export default SingleBook;
