import React, { useState } from "react";
import { useMyContext } from "../../context/Context";
import FormStyles from "./Form.styles";

const Form = () => {
  const [value, setValue] = useState("");

  const { dispatch } = useMyContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "addNewTodo", payload: value });
    setValue("");
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <FormStyles onSubmit={handleSubmit} name="todo">
      <div className="form-control">
        <button className="form-btn" type="submit"></button>
        <input
          value={value}
          onChange={handleInput}
          type="text"
          placeholder="Create a new todo..."
          className="form-input"
        />
      </div>
    </FormStyles>
  );
};

export default Form;
