import React from "react";
import DragDrop from "../DragDrop/DragDrop";
import Form from "../Form/Form";
import TodoFooterMobile from "../TodoFooterMobile/TodoFooterMobile";
import TodoBox from "../TodoBox/TodoBox";
import TodoStyles from "./Todo.styles";

const Todo = () => {
  return (
    <TodoStyles>
      <Form />
      <TodoBox />
      <TodoFooterMobile />
      <DragDrop />
    </TodoStyles>
  );
};

export default Todo;
