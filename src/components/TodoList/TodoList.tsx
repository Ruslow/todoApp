import React from "react";
import { useMyContext } from "../../context/Context";
import TodoItem from "../TodoItem/TodoItem";
import TodoListStyles from "./TodoList.styles";
import { ReactSortable } from "react-sortablejs";
import EmptyList from "../EmptyList/EmptyList";

const TodoList = () => {
  const { dispatch } = useMyContext();
  const { state } = useMyContext();
  const { todos } = state;

  return todos.length < 1 ? (
    <EmptyList />
  ) : (
    <TodoListStyles>
      <ReactSortable
        animation={200}
        list={state.todos}
        setList={(e) => {
          dispatch({ type: "setDrag", payload: e });
        }}
      >
        {todos.map((todo) => {
          const { id, ...rest } = todo;

          return <TodoItem key={id} id={id} {...rest} />;
        })}
      </ReactSortable>
    </TodoListStyles>
  );
};

export default TodoList;
