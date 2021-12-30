import React, { useState } from "react";

// styling the border
const TodoComponent = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

function TodoList({ id, description, deadline, removeTodo }) {
  const [isDone, setIsDone] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newDescription, setNewDescription] = useState(description);
  const updateTodo = () => {
    setEdit(!edit);
  };
  return (
    <>
      <TodoComponent>
        <div className="border">
          {edit ? (
            <input
              type="text"
              value={newDescription}
              onChange={(event) => {
                const value = event.target.value;
                setNewDescription(value);
              }}
            />
          ) : (
            newDescription
          )}{" "}
          | {deadline}         
            <input type="checkbox" onClick={() => setIsDone(!isDone)} />
            <button className="delet-button" onClick={() => removeTodo(id)}>
              Delete
            </button>
            <button className="edit-button" onClick={updateTodo}>
              {edit ? "Update" : "Edit"}
            </button>
          </div>
           </TodoComponent>
    </>
  );
}
export default TodoList;