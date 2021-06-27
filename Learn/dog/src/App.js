import "./App.css";
import React, { useEffect } from "react";
import Search from "./components/Search/Search";
import DogList from "./components/DogList/DogList";
import Context from "./components/context";
import Loader from "./components/Loader/Loader";
import LikedList from "./components/LikedList/LikedList";

function App() {
  const [dogList, setDogList] = React.useState([]);
  const [dogLikedList, setDogLikedList] = React.useState([
    {
      id: 1,
      liked: true,
      name: "Harlamov",
    },
  ]);

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
        localStorage.setItem("liked", dog);
        if (dog.id === id) {
          dog.liked = true;
        }
        return dog;
      })
    );
  }

  function removeDog(id) {
    let p = dogList.filter((todo) => todo.id !== id);
    setDogList(dogList.filter((todo) => todo.id !== id));
    console.log(p);
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
      value={{ removeDog, hideLeftList, hideRightList, removeFromLiked }}
    >
      <header>
        <Search onSearch={setNewSearchParam} />
        {loading && <Loader />}
        {dogList.length && leftListOpen ? (
          <DogList
            dogList={dogList}
            addToLiked={addToLiked}
            leftListOpen={leftListOpen}
          />
        ) : (
          loading
        )}
        <button onClick={showRightList}>Show</button>
        righttListOpen ?
        <LikedList
          dogLikedList={dogLikedList}
          // removeDogFromLiked={removeFromLiked}
          rightListOpen={rightListOpen}
        />
        : ''
      </header>
    </Context.Provider>
  );
}

export default App;
