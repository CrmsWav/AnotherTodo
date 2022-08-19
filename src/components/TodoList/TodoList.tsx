import React from "react";
import { Todo } from "../../model";
import "./TodoList.css";
import SingleTodo from "../SingleTodo/SingleTodo";
import {Droppable} from "@hello-pangea/dnd";

interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div className={`todos ${snapshot.isDraggingOver ? 'dragActive' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todosHeading">Actives tasks</span>
            {todos.map((todo, index) => (<SingleTodo index={index} todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="CompletedTodosList">
        {(provided, snapshot) => (
          <div className={`todosRemove ${snapshot.isDraggingOver ? 'dragComplete' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todosRemoveHeading">Completed tasks</span>
            {completedTodos.map((todo, index) => (<SingleTodo index={index} todo={todo} key={todo.id} todos={todos} setTodos={setCompletedTodos} />))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>


    /*<div className="todoList">
      {todos.map(todo => (
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>*/
  );
}

export default TodoList;
