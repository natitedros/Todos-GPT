import { Link, useNavigate } from "react-router-dom";

interface SingleTodoProps {
  id: string;
  title: string;
  description: string;
}

const SingleTodo: React.FunctionComponent<SingleTodoProps> = (props) => {
  const id = props.id;
  const title = props.title;
  const desc = props.description;
  const navigate = useNavigate();
  const deleteHandler = () => {
    fetch("http://localhost:8080/todos/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/addtodo");
    });
  };

  return (
    <div className="singleTodo">
      <h2>{title}</h2>
      <p>{desc}</p>
      <button>
        <Link
          className="links"
          to="/updatetodo"
          state={{ id: id, title: title, desc: desc }}
        >
          UPDATE
        </Link>
      </button>
      <button onClick={deleteHandler}>DELETE</button>
    </div>
  );
};

export default SingleTodo;
