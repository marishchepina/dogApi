import React, { useContext } from "react";
import Context from "../context";
import LikedDog from "../LikedDog/LikedDog";
//import "./DogList.css";

let LikedList = (props) => {
  const { removeFromLiked, hideRightList } = useContext(Context);
  console.log("props " + props);

  return (
    <div className="list list--right">
      <div
        className="list__close"
        onClick={hideRightList.bind(props.rightListOpen)}
      >
        ×
      </div>
      {props.dogLikedList.map((el, index) => {
        return (
          <LikedDog
            index={index}
            dogLiked={el}
            key={el.id}
            onClick={removeFromLiked.bind(null, el.id)}
          />
        );
      })}
    </div>
  );
};

export default LikedList;
