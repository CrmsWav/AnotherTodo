import React, {useEffect} from 'react';
import { Todo } from '../../model';
import "./SingleTodo.css";
import {FaRegEdit} from "react-icons/fa";
import {BsCheckCircle} from "react-icons/bs";
import {MdOutlineDeleteForever} from "react-icons/md";
import {Draggable} from "@hello-pangea/dnd";

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({index, todo, todos, setTodos}: Props) => {
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
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form className={`singleTodo ${snapshot.isDragging ? "drag" : ""}`} onSubmit={(e) => handleEdit(e, todo.id)} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          {edit ? (
              <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="singleTodoTest" ref={inputRef} />
            ) : todo.completed ? (
              <s className="singleTodoText">{todo.description}</s>
            ) : (
              <span className="singleTodoText">{todo.description}</span>
            )}

          <div className="icons">
            <span onClick={() => {
                if (!edit && !todo.completed) {
                  setEdit(!edit);
                }
              }}
            >
              <FaRegEdit className="icon" />
            </span>

            <span onClick={() => handleDelete(todo.id)}>
              <MdOutlineDeleteForever className="icon" />
            </span>

            <span onClick={() => handleDone(todo.id)}>
              <BsCheckCircle className="icon" />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
}

export default SingleTodo;
