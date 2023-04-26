import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () => {
  const [dos, setDos] = useState([]);

  const addTodo = (todo) => {
    setDos([
      ...dos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = id =>{
    setDos(dos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = id =>{
    setDos(dos.filter(todo => todo.id !== id))
  }

  const editTodo = id =>{
    setDos(dos.map(todo => todo.id === id ? {...todo,  isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) =>{
    setDos(dos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}:todo))
  }

  return (
    <div className="todoWrapper">
    <h1>Get Thing Done!</h1>
      <TodoForm addTodo={addTodo} />
      {dos.map((todo, index) => (
        todo.isEditing ?( 
            <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
            <Todo task={todo} key={index}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        />
        )
        
      ))}
    </div>
  );
};
