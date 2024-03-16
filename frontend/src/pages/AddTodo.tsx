import NewTodo from "../components/NewTodo";
import { useNavigate } from "react-router-dom";
interface AddTodoPageProps {}

const AddTodoPage: React.FunctionComponent<AddTodoPageProps> = () => {
  const navigate = useNavigate();
  const addTodoHandler = (title: string, desc: string) => {
    const todos = { title: title, description: desc };
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todos),
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="addTodoPage">
      <NewTodo
        isUpdate={false}
        onAddOrUpdate={addTodoHandler}
        title=""
        desc=""
      />
    </div>
  );
};

export default AddTodoPage;
