import React, { useReducer, useRef, useEffect } from "react";
import "./index.css";
import Books from "./Books/Books";
import Form from "./Books/Form";

const initialState = {
  isFormOpen: false,
  booksArr: [
    { id: 111, bookName: "the one thing", authour: "not Sure" },
    { id: 222, bookName: "the one thing", authour: "not Sure" },
  ],
};

const reducer = (state, action) => {
  if (action.type === "add") {
    return { ...state, booksArr: [...state.booksArr, action.payload] };
  }

  if (action.type === "remove") {
    return {
      ...state,
      booksArr: state.booksArr.filter((book) => book.id !== action.payload),
    };
  }
  if (action.type === "open") return { ...state, isFormOpen: true };
};

//app component
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(null);
  const nameRef = useRef(null);
  const autherRef = useRef(null);

  const addNewBook = () => {
    const id = idRef.current.value;
    const name = nameRef.current.value;
    const authour = autherRef.current.value;
    if (state.isFormOpen && (!id || !name || !authour)) {
      return alert("please fill all the fields");
    } else {
      const newBook = { id: id, bookName: name, authour: authour };
      console.log(newBook);
      dispatch({ type: "add", payload: newBook });
      console.log(state.booksArr);
    }
  };

  //functions
  const submitHandler = () => {
    addNewBook();
    dispatch({ type: "add" });
  };

  return (
    <div className="container">
      <Books
        booksArr={state.booksArr}
        isFormOpen={state.isFormOpen}
        dispatch={dispatch}
        submitHandler={submitHandler}
        addNewBook={addNewBook}
      />
      {state.isFormOpen && (
        <Form
          submitHandler={submitHandler}
          idRef={idRef}
          nameRef={nameRef}
          autherRef={autherRef}
          addNewBook={addNewBook}
        />
      )}
    </div>
  );
}

export default App;
