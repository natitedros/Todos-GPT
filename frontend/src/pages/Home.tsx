import useFetch from "../useFetch";
import TodoList from "../components/TodoList";

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const {
    data: todos,
    isPending,
    error,
  } = useFetch("http://localhost:8080/todos", "GET");
  return (
    <div className="home">
      {isPending && <p>Loading...</p>}
      {error && <h2>{error}</h2>}
      {todos && <TodoList todos={todos} title="All Todos" />}
    </div>
  );
};

export default HomePage;
