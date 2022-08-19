import React, {useEffect} from 'react';
import { Todo } from '../../model';
import "./SingleTodo.css";
import {FaRegEdit} from "react-icons/fa";
import {BsCheckCircle} from "react-icons/bs";
import {MdOutlineDeleteForever} from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editTodo, setEditTodo] = React.useState<string>(todo.description);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()

    setTodos(
      todos.map(todo => todo.id === id ? {...todo, description: editTodo} : todo)
    );
    setEdit(false);
  }

  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="singleTodo" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
          <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="singleTodoTest" ref={inputRef} />
        ) : todo.completed ? (
          <s className="singleTodoText">{todo.description}</s>
        ) : (
          <span className="singleTodoText">{todo.description}</span>
        )}

      <div className="icons">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.completed) {
              setEdit(!edit);
            }
          }}
        >
          <FaRegEdit />
        </span>

        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <MdOutlineDeleteForever />
        </span>

        <span className="icon" onClick={() => handleDone(todo.id)}>
          <BsCheckCircle />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
