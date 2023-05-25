import React from "react";

import classes from "./Button.module.css";
//

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      //setting button type dynamically if props.type is undefined then it must be button type
      onClick={props.onClick}
      //any other name can be used instead of onClick
    >
      {props.children}
      {/* //to add a text for the button */}
    </button>
  );
};

export default Button;
