import React from "react";
import "./Dog.css";

const Dog = ({ dog, index, addToLiked }) => {
  const classes = ["like"];
  if (dog.liked) {
    classes.push("like--active");
  }

  return (
    <div className={classes.join(" ")}>
      <span>{index + 1}. </span>
      {dog.name}
      <span className="like__heard" onClick={() => addToLiked(dog.id)}>
        ❥
      </span>
    </div>
  );
};

export default Dog;
