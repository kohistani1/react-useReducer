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
  let idRef = useRef(null);
  let nameRef = useRef(null);
  let autherRef = useRef(null);

  const addNewBook = () => {
    let id = idRef.current.value;
    let name = nameRef.current.value;
    let authour = autherRef.current.value;
    if (state.isFormOpen && (!id || !name || !authour)) {
      return alert("please fill all the fields");
    } else {
      const newBook = { id: id, bookName: name, authour: authour };
      dispatch({ type: "add", payload: newBook });
    }

    //clear inputs
    idRef.current.value = nameRef.current.value = autherRef.current.value = "";
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
