import React, { useContext } from "react";
import "../Dog/Dog.css";
import Context from "../context";

const LikedDog = ({ dogLiked, index, rightListOpen }) => {
  const { removeDogFromLiked } = useContext(Context);

  return (
    <div className="like like--active">
      <span>{index + 1}. </span>
      {dogLiked.name}
      <span
        className="like__heard like__heard--remove"
        onClick={removeDogFromLiked.bind(null, dogLiked.id)}
      >
        ❥
      </span>
    </div>
  );
};

export default LikedDog;
