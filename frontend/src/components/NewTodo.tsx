interface NewTodoProps {}

const NewTodo: React.FunctionComponent<NewTodoProps> = () => {
  return (
    <div className="newTodo">
      <form>
        <label htmlFor="">Title: </label>
        <input type="text" id="title" placeholder="Enter title here..." />
        <label htmlFor="">Description: </label>
        <textarea
          name=""
          id="description"
          placeholder="Enter description here..."
        ></textarea>
        <button className="autofillBtn">AUTOFILL</button>
        <button className="addTodoBtn" type="submit">
          ADD TODO
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
