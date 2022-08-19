import React from "react";
import { Todo } from "../../model";
import "./TodoList.css";
import SingleTodo from "../SingleTodo/SingleTodo";

interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todosHeading">Actives tasks</span>
        {todos.map((todo) => (<SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />))}
      </div>

      <div className="todosRemove">
        <span className="todosRemoveHeading">Completed tasks</span>
        {todos.map((todo) => (<SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />))}
      </div>
    </div>

    /*<div className="todoList">
      {todos.map(todo => (
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>*/
  );
}

export default TodoList;
