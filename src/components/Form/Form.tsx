import React, { useState } from "react";
import { useMyContext } from "../../context/Context";
import FormStyles from "./Form.styles";

const Form = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useMyContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
    console.log(value);
    if (value) {
      dispatch({ type: "addNewTodo", payload: value });
      setError("");
      setValue("");
    } else {
      setError("Please enter the value");
    }
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const errorRender = error ? <p>{error}</p> : null;
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
      {errorRender}
    </FormStyles>
  );
};

export default Form;
