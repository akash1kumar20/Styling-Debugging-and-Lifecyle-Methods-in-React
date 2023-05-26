import React from "react";

import Card from "../UI/Card";
import classes from "./UserData.module.css";

const UserData = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} {user.college} (university) ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserData;
