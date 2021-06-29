import "./App.css";
import React, { useEffect } from "react";
import Search from "./components/Search/Search";
import DogList from "./components/DogList/DogList";
import Context from "./components/context";
import Loader from "./components/Loader/Loader";
import LikedList from "./components/LikedList/LikedList";

function App() {
  const [dogList, setDogList] = React.useState([]);
  const [dogLikedList, setDogLikedList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [searchParam, setSearchParam] = React.useState("");
  const [leftListOpen, setleftListOpen] = React.useState(false);
  const [rightListOpen, setRightListOpen] = React.useState(false);

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/search?q=${searchParam}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (parsedJson) {
        setDogList(parsedJson);
        setLoading(false);
        setleftListOpen(true);
      })
      .catch(function (err) {
        console.log("помилка");
      });
  }, [searchParam]);

  function addToLiked(id) {
    setDogList(
      dogList.map((dog) => {
        if (dog.id === id) {
          dog.liked = true;
          setDogLikedList([...dogLikedList, dog]);
        }
        return dog;
      })
    );
    console.log("newLiked: " + dogLikedList);
  }

  function removeDogFromLiked(id) {
    setDogLikedList(dogLikedList.filter((dog) => dog.id !== id));
  }

  function setNewSearchParam(param) {
    setSearchParam(param);
    console.log(searchParam);
  }

  function hideLeftList() {
    setleftListOpen(false);
  }

  function hideRightList() {
    setRightListOpen(false);
  }

  function showRightList() {
    setRightListOpen(true);
  }

  function removeFromLiked() {
    console.log("removeFromLiked");
  }

  return (
    <Context.Provider
      value={{
        removeDogFromLiked,
        hideLeftList,
        hideRightList,
        removeFromLiked,
        addToLiked,
      }}
    >
      <header>
        <Search onSearch={setNewSearchParam} />
        {dogList.length && leftListOpen ? (
          <DogList
            dogList={dogList}
            addToLiked={addToLiked}
            leftListOpen={leftListOpen}
          />
        ) : (
          loading
        )}
        <span className="header__heard heard" onClick={showRightList}>
          ❥
        </span>
        {rightListOpen ? (
          <LikedList
            dogLikedList={dogLikedList}
            removeDogFromLiked={removeFromLiked}
            rightListOpen={rightListOpen}
          />
        ) : (
          ""
        )}
      </header>
      {loading && <Loader />}
    </Context.Provider>
  );
}

export default App;
