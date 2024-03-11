import { useState, useEffect } from "react";
import axios from "axios";
import { Todo } from "./models/todo.model";

const useFetch = (url: string) => {
  const [data, setData] = useState<Todo[] | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data!");
        }
        return res.json();
      })
      .then((data: { todos: Todo[] }) => {
        setData(data.todos);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted!");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
    return () => abortCont.abort();
  }, []);
  return { data, isPending, error };
};

export default useFetch;
