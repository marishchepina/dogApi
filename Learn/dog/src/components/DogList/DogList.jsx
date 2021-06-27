import React, { useContext } from "react";
import Context from "../context";
import Dog from "../Dog/Dog";
import "./DogList.css";

let DogList = (props) => {
  console.log(props);
  debugger;
  const { hideLeftList } = useContext(Context);

  return (
    <div className="list list--left">
      <div
        className="list__close"
        onClick={hideLeftList.bind(props.leftListOpen)}
      >
        ×
      </div>
      {props.dogList.map((el, index) => {
        return (
          <Dog
            index={index}
            dog={el}
            key={el.id}
            addToLiked={props.addToLiked}
          />
        );
      })}
    </div>
  );
};

export default DogList;
