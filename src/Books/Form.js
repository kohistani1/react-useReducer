function Form({ idRef, nameRef, autherRef, addNewBook }) {
  return (
    <div className="form">
      <form className="hidden">
        <div className="form-control">
          <label htmlFor="id">Id: </label>
          <input type="text" name="bookName" ref={idRef} />
        </div>
        <div className="form-control">
          <label htmlFor="bookName" name="bookName">
            Book Name:{" "}
          </label>
          <input type="text" name="bookName" ref={nameRef} />
        </div>
        <div className="form-control">
          <label htmlFor="auther" name="auther">
            Author:{" "}
          </label>
          <input type="text" name="auther" ref={autherRef} />
        </div>
      </form>
      <button className="btn" id="get-value" type="submit" onClick={addNewBook}>
        add Book
      </button>
    </div>
  );
}

export default Form;
