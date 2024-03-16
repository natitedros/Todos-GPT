import NewTodo from "../components/NewTodo";
import { useNavigate, useLocation } from "react-router-dom";

interface UpdataTodoPageProps {}

const UpdataTodoPage: React.FunctionComponent<UpdataTodoPageProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, title, desc } = location.state;
  const updateTodoHandler = (title: string, desc: string) => {
    const newTodo = { title: title, description: desc };
    fetch("http://localhost:8080/todos/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="addTodoPage">
      <NewTodo
        isUpdate={true}
        onAddOrUpdate={updateTodoHandler}
        title={title}
        desc={desc}
      />
    </div>
  );
};

export default UpdataTodoPage;
