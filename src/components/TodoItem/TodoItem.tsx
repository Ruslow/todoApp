import React from "react";
import cross from "../../assets/images/icon-cross.svg";
import check from "../../assets/images/icon-check.svg";
import TodoItemStyles from "./TodoItem.styles";
import { useMyContext } from "../../context/Context";
const TodoItem = ({
  title,
  completed,
  id,
}: {
  title: string;
  completed: boolean;
  id: number;
}) => {
  const active = {
    cirlceActive: completed ? "circleActive" : "",
    checkActive: completed ? "" : "checkHide",
    pActive: completed ? "pActive" : "",
  };
  const { dispatch } = useMyContext();
  const handleComplete = () => {
    dispatch({ type: "completeTodo", payload: id });
  };
  const handleClear = () => {
    dispatch({ type: "clearItem", payload: id });
  };
  return (
    <TodoItemStyles onClick={handleComplete}>
      <div>
        <button className={active.cirlceActive}>
          <img src={check} alt="check" className={active.checkActive} />
        </button>
        <p className={active.pActive}>{title}</p>
      </div>
      <img onClick={handleClear} src={cross} alt="cross" />
    </TodoItemStyles>
  );
};

export default TodoItem;
