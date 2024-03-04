import NewTodo from "../components/NewTodo";
interface AddTodoPageProps {}

const AddTodoPage: React.FunctionComponent<AddTodoPageProps> = () => {
  return (
    <div className="addTodoPage">
      <NewTodo />
    </div>
  );
};

export default AddTodoPage;
