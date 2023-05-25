import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./UserForm.module.css";
// for CSS module we're importing our CSS file in that, for non-module, we don't have to use classes form.
import Button from "../UI/Button";
function UserForm() {
  const [error, setError] = useState();
  const [userName, setUserName] = useState("");
  const userNameSubmit = (event) => {
    setUserName(event.target.value);
  };
  const [userAge, setUserAge] = useState("");
  const userAgeSubmit = (event) => {
    setUserAge(event.target.value);
  };
  const userDetails = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 && userAge.trim().length === 0) {
      //this is to make sure that user can submit the empty form
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    console.log("User Name is", userName, "User Age is", userAge);
    setUserName("");
    setUserAge("");
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={userDetails}>
          <div>
            <label htmlFor="name">UserName</label>
            <input
              type="text"
              id="name"
              value={userName}
              onChange={userNameSubmit}
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age(In Years)</label>
            <input
              type="number"
              id="age"
              value={userAge}
              onChange={userAgeSubmit}
            ></input>
          </div>
          <Button type="submit">Add User</Button>
          {/* Here Button is our custom component, that's why we use capital letter syntax, otherwise we use small letter.  */}
        </form>
      </Card>
    </div>
  );
}
export default UserForm;
