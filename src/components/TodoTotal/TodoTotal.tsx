import React from "react";
import { useMyContext } from "../../context/Context";
import TodoTotalStyles from "./TodoTotal.styles";

const TodoTotal = () => {
  const { state } = useMyContext();
  const { todos } = state;
  return (
    <TodoTotalStyles>
      <p>{todos.length} items left</p>
      <p>Clear Completed</p>
    </TodoTotalStyles>
  );
};

export default TodoTotal;
