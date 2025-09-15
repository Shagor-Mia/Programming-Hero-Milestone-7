import "./App.css";
import Event from "./components/event";
import Counter from "./components/counter";
import Player from "./components/player";
import Users from "./components/users";
import { Suspense } from "react";
import Friends from "./components/friends";

const userFetch = fetch(`https://jsonplaceholder.typicode.com/users`).then(
  (res) => res.json()
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      {/* <Event /> */}
      {/* <Counter /> */}
      {/* <Player /> */}
      <Suspense fallback={<h4>loading ...</h4>}>
        <Users fetchUser={userFetch} />
      </Suspense>
      <Suspense fallback={<h4>friends are coming ...</h4>}>
        <Friends fetchFriends={fetchFriends()} />
      </Suspense>
    </>
  );
}

export default App;
