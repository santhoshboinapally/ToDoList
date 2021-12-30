import React, { useState } from "react";

function TodoForm() {
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodo] = useState([]);

const  addTodo=(event)=>{
  event.preventDefault();
if(value !== ""){
  const newTodo = {id:todos.length+1, description:value, date:date};
  setValue("");
  setDate("");
  setTodo([...todos, newTodo]);
}
};
console.log(todos);
   return (
       <div className="form">
      <form onSubmit={addTodo}>
        <label htmlFor="descriptionInput">Description : </label>
        <input
          type="text"
          name="description"
          value={value}
          id="descriptionInput"
          onChange={e => setValue(e.target.value)}        
          required
        /><br/>
        <label htmlFor="descriptionInput">Deadline : </label>
        <input
          type="date"
          name="date"
          value={date}
          id="dateInput"
          onChange={e => setDate(e.target.value)}
          required
        /><br />
        <button type="submit" onClick={addTodo}> Add Todo</button>
      </form>
      </div>
  );
}
export default TodoForm;