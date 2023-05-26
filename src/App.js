import React, { useState } from "react";

import UserForm from "./Components/Form/UserForm";
import UserData from "./Components/Form/UserData";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          age: uAge,
          college: uCollege,
          id: Math.random().toString(),
        },
      ];
    });
  };
  // UserData doesn't have the access of data which we get from the UserForm component, if it  no access, it can show that data on the screen, App component is the closet component to UserData and UserForm component and have access for both the component, so with the the help of App, we make a connection b/w UserData and UserForm component.

  return (
    <React.Fragment>
      <UserForm onAddUser={addUserHandler} />
      {/* onAddUser is poniting to the addUserHandler function and we use onAddUser function in UserForm to store the data. */}
      <UserData users={usersList} />
      {/* users give us the data in the array from which can we use in the UserData component and usersList is forwading to the component */}
    </React.Fragment>
  );
}

export default App;
