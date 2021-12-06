import React from "react";

function Btn({ dispatch }) {
  return (
    <div>
      <button
        className="btn"
        id="open-form"
        type="submit"
        onClick={() => dispatch({ type: "open" })}
      >
        Add New Book
      </button>
    </div>
  );
}

export default Btn;
