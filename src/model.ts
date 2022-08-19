export interface Todo{
  id: number;
  description: string;
  completed: boolean;
}

/*
type Actions =
  { type: 'add'; payload: string; } |
  { type: 'remove'; payload: number; } |
  { type: 'done'; payload: number; };

const TodoReducer = (state: Todo[], action: any) => {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now, description: action.payload, completed: false }];
    case 'remove':
      return state.filter(todo => todo.id !== action.payload);
    case 'done':
      return state.map(todo => todo.id === action.payload ? { ...todo, completed: true } : todo);
    default:
      return state;
  }
}

import { useReducer} from "react";
const ReducerExample = (state: Todo[], action: any) => {
  const [state, dispatch] = useReducer(TodoReducer, []);

  return (
    <div/>
  );
}
*/
