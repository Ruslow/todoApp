import React, { useState } from "react";
import { useMyContext } from "../../context/Context";
import TodoFilterStyles from "./TodoFilter.styles";

type Paras = {
  title: "All" | "Active" | "Completed";
  id: number;
  type: "filterActive" | "filterAll" | "filterCompleted";
};
const paras: Paras[] = [
  { title: "All", id: 1, type: "filterAll" },
  {
    title: "Active",
    id: 2,
    type: "filterActive",
  },
  {
    title: "Completed",
    id: 3,
    type: "filterCompleted",
  },
];

const TodoFilter = () => {
  const [active, setActive] = useState(0);
  const { dispatch } = useMyContext();
  return (
    <TodoFilterStyles>
      {paras.map((p, index) => {
        const { id, title, type } = p;
        return (
          <p
            className={index === active ? "active" : ""}
            onClick={() => {
              dispatch({ type });
              setActive(index);
            }}
            key={id}
          >
            {title}
          </p>
        );
      })}
    </TodoFilterStyles>
  );
};

export default TodoFilter;
