import { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import toast, { Toaster } from "react-hot-toast";

export const TodoWrapper = ({ setUser }) => {
  const [todos, setTodos] = useState([]);
  //everything here is managed based on a single useState and it is wrong because if there were any problems the entire paradigm would have to change,
  //in addition each everything should be linked to each user with a userId

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    toast.success("Todo Added Successfully!", {
      position: "top-center",
      autoClose: 1500,
    });
  };

  const deleteTodo = (id) => {
    // This function searches and filters by id and saves it again in the array
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    toast.success("Todo deleted Successfully!", {
      position: "top-center",
      autoClose: 1500,
    });
  };

  const toggleComplete = (id) => {
    // This function marks each task as completed or not
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    // This function is to be able to set whether the task is editable or not
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    //This is the function that edits the task and saves it in the array
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <Toaster />
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
