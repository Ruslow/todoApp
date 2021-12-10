import React from "react";
import TodoFooterDesktop from "../TodoFooterDesktop/TodoFooterDesktop";
import TodoTotal from "../TodoTotal/TodoTotal";
import TodoList from "../TodoList/TodoList";
import TodoBoxStyles from "./TodoBox.styles";

const TodoBox = () => {
  return (
    <TodoBoxStyles data-testid="todobox">
      <TodoList />
      <TodoTotal />
      <TodoFooterDesktop />
    </TodoBoxStyles>
  );
};

export default TodoBox;
