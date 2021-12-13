import React from "react";
import { Todo, useMyContext } from "../../context/Context";
import TodoItem from "../TodoItem/TodoItem";
import TodoListStyles from "./TodoList.styles";
import { ReactSortable } from "react-sortablejs";
import EmptyList from "../EmptyList/EmptyList";

const TodoList = () => {
  const { dispatch } = useMyContext();
  const { state } = useMyContext();
  const { todos } = state;
  const handleDragDrop = (e: Todo[]) => {
    dispatch({ type: "setDrag", payload: e });
  };

  return todos.length < 1 ? (
    <EmptyList />
  ) : (
    <TodoListStyles>
      <ReactSortable
        animation={200}
        list={state.todos}
        setList={handleDragDrop}
      >
        {todos.map(({ id, ...rest }) => {
          return <TodoItem key={id} id={id} {...rest} />;
        })}
      </ReactSortable>
    </TodoListStyles>
  );
};

export default TodoList;
