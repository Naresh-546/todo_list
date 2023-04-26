import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo">
      <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? `completed`: ""}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon className="fa-pen-square" icon={faPenSquare} onClick={()=>{
            editTodo(task.id)
        }} />
        <FontAwesomeIcon icon={faTrash} onClick={()=>{
            deleteTodo(task.id)
        }} />
      </div>
    </div>
  );
};
