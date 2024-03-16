import { useState } from "react";

interface NewTodoProps {
  isUpdate: boolean;
  onAddOrUpdate: (todoTitle: string, todoDesc: string) => void;
  title: string;
  desc: string;
}

const NewTodo: React.FunctionComponent<NewTodoProps> = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.desc);

  const submitHandler: React.FormEventHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.onAddOrUpdate(title, description);
  };
  return (
    <div className="newTodo">
      <form onSubmit={submitHandler}>
        <label htmlFor="">Title: </label>
        <input
          value={title}
          type="text"
          id="title"
          placeholder="Enter title here..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Description: </label>
        <textarea
          value={description}
          name=""
          id="description"
          placeholder="Enter description here..."
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="autofillBtn">AUTOFILL</button>
        {props.isUpdate && (
          <button className="addTodoBtn" type="submit">
            UPDATE TODO
          </button>
        )}
        {props.isUpdate !== true && (
          <button className="addTodoBtn" type="submit">
            ADD TODO
          </button>
        )}
      </form>
    </div>
  );
};

export default NewTodo;
