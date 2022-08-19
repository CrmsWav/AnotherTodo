import React from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import { Todo } from "./model";
import TodoList from './components/TodoList/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>('');
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now(), description: todo, completed: false}]);
      setTodo("");
    }
  }

  return (
    <div className="App">
      <span className="heading">Another Todo</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
