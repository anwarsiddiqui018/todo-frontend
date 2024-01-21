import React, { useEffect, useState } from "react";
import TodoDataService from "../services/todos";

const TodosList = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    retrieveTodos();
  }, [props.token]);

  const retrieveTodos = async () => {
    try {
      const todosData = await TodoDataService.getAll(props.token);
      console.log("Todos data:", todosData);
      setTodos(todosData);
    } catch (error) {
      console.error("Error retrieving todos:", error);
    }
  };

  return <div></div>;
};
export default TodosList;
