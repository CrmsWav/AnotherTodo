import React  from "react";
import "./InputField.css";

interface InputFieldProps {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<InputFieldProps> = ({todo, setTodo, handleAdd}: InputFieldProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
    }}>
      <input
        ref={inputRef}
        type="input"
        placeholder="Add a todo"
        className="inputBox" value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="inputSubmit">
        Add
      </button>
    </form>
  );
}

export default InputField;
