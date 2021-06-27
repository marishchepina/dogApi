import React, { useContext } from "react";
import "../Dog/Dog.css";
import Context from "../context";

const LikedDog = (props) => {
  console.log(props);
  const { removeDog } = useContext(Context);

  return (
    <div className="like like--active">
      {props.dogLiked.name}
      <span
        className="like__heard like__heard--remove"
        onClick={removeDog.bind(null, props.dogLiked.id)}
      >
        ❥
      </span>
    </div>
  );
};

export default LikedDog;
