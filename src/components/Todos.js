import TodoForm from "./Todoform";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";


function Todos() {

  const [useTodos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  const url =
    "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
  async function fetchingData() {
    const result = await fetch(url);
    const todos = await result.json();
    setTodos(todos);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchingData();
  }, []);

  
  const handleDelete = (id) =>
    setTodos(useTodos.filter((todo) => todo.id !== id));

  return (
    <div className="App">
        <TodoForm useTodos={useTodos} setTodos={setTodos} />
        {useTodos.length === 0 && <h3>Todo List Is Empty</h3>}
        <div>
          {isLoading ? (
            "Loading..."
          ) : (
            <TodoList todoItems={useTodos} delete={handleDelete} />
          )}
        </div>
      </div>
    
  );
} 
export default Todos;