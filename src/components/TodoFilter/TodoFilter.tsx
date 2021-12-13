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
      {paras.map(({ id, title, type }, index) => {
        const pClass = index === active ? "active" : "";
        const handleClick = () => {
          dispatch({ type });
          setActive(index);
        };
        return (
          <p className={pClass} onClick={handleClick} key={id}>
            {title}
          </p>
        );
      })}
    </TodoFilterStyles>
  );
};

export default TodoFilter;
