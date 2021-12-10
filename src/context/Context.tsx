import * as React from "react";

const getTheme = (theme: string) => {
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme")!;
  }
  return theme;
};

const getTodos = (items: [] | Todo[]) => {
  if (localStorage.getItem("todos")) {
    items = JSON.parse(localStorage.getItem("todos")!);
  }
  return items;
};

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Action =
  | { type: "addNewTodo"; payload: string }
  | { type: "clearCompleted" }
  | { type: "switchTheme" }
  | { type: "completeTodo"; payload: number }
  | { type: "filterAll" }
  | { type: "filterActive" }
  | { type: "filterCompleted" }
  | { type: "clearItem"; payload: number }
  | { type: "setDrag"; payload: Todo[] };
type Dispatch = (action: Action) => void;
type State = {
  todos: [] | Todo[];
  theme: string;
  allTodos: [] | Todo[];
};
type ProviderProps = { children: React.ReactNode };

const MyContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const initialState: State = {
  todos: getTodos([]),
  theme: getTheme("dark"),
  allTodos: [],
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "addNewTodo": {
      const newTodo = {
        id: Math.random() * 100000000000,
        title: action.payload,
        completed: false,
      };
      localStorage.setItem("todos", JSON.stringify([...state.todos, newTodo]));
      return {
        ...state,
        todos: [...state.todos, newTodo],
        allTodos: [...state.allTodos, newTodo],
      };
    }
    case "completeTodo": {
      const newTodo = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return {
        ...state,
        todos: newTodo,
        allTodos: newTodo,
      };
    }
    case "filterAll": {
      return { ...state, todos: state.allTodos };
    }
    case "filterActive": {
      return {
        ...state,
        todos: state.allTodos.filter((todo) => todo.completed === false),
      };
    }
    case "filterCompleted": {
      return {
        ...state,
        todos: state.allTodos.filter((todo) => todo.completed === true),
      };
    }
    case "clearCompleted": {
      localStorage.setItem(
        "todos",
        JSON.stringify(
          state.allTodos.filter((todo) => todo.completed === false)
        )
      );
      return {
        ...state,
        todos: state.allTodos.filter((todo) => todo.completed === false),
        allTodos: state.allTodos.filter((todo) => todo.completed === false),
      };
    }
    case "clearItem": {
      return {
        ...state,
        todos: state.allTodos.filter((todo) => todo.id !== action.payload),
        allTodos: state.allTodos.filter((todo) => todo.id === action.payload),
      };
    }
    case "switchTheme": {
      localStorage.setItem("theme", state.theme === "dark" ? "light" : "dark");
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    }
    case "setDrag": {
      localStorage.setItem("todos", JSON.stringify(action.payload));
      return { ...state, todos: action.payload, allTodos: action.payload };
    }
    default: {
      return state;
    }
  }
}

function Provider({ children }: ProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = { state, dispatch };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

function useMyContext() {
  const context = React.useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a Provider");
  }
  return context;
}

export { Provider, useMyContext };
