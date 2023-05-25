import React, { useState } from "react";

import UserForm from "./Components/Form/UserForm";
import UserData from "./Components/Form/UserData";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UserData users={usersList} />
    </div>
  );
}

export default App;
