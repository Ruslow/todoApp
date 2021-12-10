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
  const cirlceActive = completed ? "circleActive" : "";
  const checkActive = completed ? "" : "checkHide";
  const pActive = completed ? "pActive" : "";
  const { dispatch } = useMyContext();
  return (
    <TodoItemStyles
      onClick={() => dispatch({ type: "completeTodo", payload: id })}
    >
      <div>
        <button className={cirlceActive}>
          <img src={check} alt="check" className={checkActive} />
        </button>
        <p className={pActive}>{title}</p>
      </div>
      <img
        onClick={() => dispatch({ type: "clearItem", payload: id })}
        src={cross}
        alt="cross"
      />
    </TodoItemStyles>
  );
};

export default TodoItem;
