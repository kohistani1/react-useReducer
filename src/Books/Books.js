import React from "react";
import SingleBook from "./SingleBook";

function Books({ isFormOpen, booksArr, dispatch, submitHandler, addNewBook }) {
  return (
    <div>
      {
        <SingleBook
          booksArr={booksArr}
          dispatch={dispatch}
          submitHandler={submitHandler}
          addNewBook={addNewBook}
          isFormOpen={isFormOpen}
        />
      }
    </div>
  );
}

export default Books;
