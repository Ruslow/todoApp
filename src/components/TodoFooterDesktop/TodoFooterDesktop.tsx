import React from "react";
import { useMyContext } from "../../context/Context";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodoFooterDesktopStyles from "./TodoFooterDesktop.styles";

const TodoFooterDesktop = () => {
  const { state, dispatch } = useMyContext();
  const { todos } = state;
  return (
    <TodoFooterDesktopStyles>
      <p>{todos.length} items left</p>
      <TodoFilter />
      <p onClick={() => dispatch({ type: "clearCompleted" })}>
        Clear Completed
      </p>
    </TodoFooterDesktopStyles>
  );
};

export default TodoFooterDesktop;
