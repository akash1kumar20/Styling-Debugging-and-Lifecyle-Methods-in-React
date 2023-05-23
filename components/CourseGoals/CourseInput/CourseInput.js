import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [isValid, setValid] = useState(true);
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setValid(true);
      //when user first submit invalid form, the text area get changed but then it start typing, then the text area get the default styling.
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length === 0) {
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  const buttonCount = (event) => {
    event.preventDefault();
    if (enteredValue.length === 0) {
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={
          `form-control ${!isValid ? "invalid" : ""}`
          //adding class dynamically
        }
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
