import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./UserForm.module.css";
import Wrapper from "../Helpers/Wrapper";
// for CSS module we're importing our CSS file in that, for non-module, we don't have to use classes form.
import Button from "../UI/Button";
function UserForm(props) {
  const [error, setError] = useState();
  //starting value is undefined, that's why we don't pass anything in the ().
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
      //when there is a invalid data, we're not just going back, we're showing a message too.
    }
    if (+userAge < 1) {
      //to convert from string to number, we use +userAge
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(userName, userAge);
    //forwading every data we get from the user to App component, and from that making a connection to the UserData component, for display.
    console.log("User Name is", userName, "User Age is", userAge);
    setUserName("");
    setUserAge("");
  };
  const errorHandler = () => {
    setError(null);
    //this funcion is used to clear the message from the screen when we click on the okay button or anywhere on the screen.
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
          //onConfirm function is describe the ErrorModal Component.
        />
      )}
      {/* if don't get any error, then the below part will get exceuted. */}
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
    </Wrapper>
  );
}
export default UserForm;
