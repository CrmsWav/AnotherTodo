import React from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import { Todo } from "./model";
import TodoList from './components/TodoList/TodoList';
import {DragDropContext, DropResult} from "@hello-pangea/dnd";

const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>('');
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = React.useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now(), description: todo, completed: false}]);
      setTodo("");
    }
  }

  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result;

    console.log(result);

    if(!destination) return;

    if(source.droppableId === destination.droppableId && source.index === destination.index) return;

    let add,
      active = todos,
      completed = completedTodos;

    if(source.droppableId === "TodosList"){
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }

    if(destination.droppableId === "TodosList"){
      active.splice(destination.index, 0, add);
    } else {
      completed.splice(destination.index, 0, add);
    }

    setCompletedTodos(completed);
    setTodos(active);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Another Todo</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
      </div>
    </DragDropContext>
  );
}

export default App;
