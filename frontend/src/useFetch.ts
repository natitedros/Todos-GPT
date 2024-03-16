import { useState, useEffect } from "react";
import { Todo } from "./models/todo.model";

type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

const useFetch = (
  url: string,
  method: HttpMethod,
  body: { title: string; description: string } | null = null
) => {
  const [data, setData] = useState<Todo[] | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, {
      method,
      ...(method !== "GET" && { body: JSON.stringify(body) }),
      signal: abortCont.signal,
    })
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
