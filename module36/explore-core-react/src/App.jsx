import "./App.css";
import Actors from "./components/actors";
import Dev from "./components/dev";
import Food from "./components/food";
import Player from "./components/player";
import Singer from "./components/singer";

function App() {
  // const time = 50;
  // const actors = ["amin khan", "rubel", "riaz", "shakib"];
  const singers = [
    { id: 1, name: "himesh", age: 34 },
    { id: 2, name: "ramesh", age: 44 },
    { id: 3, name: "dinesh", age: 24 },
  ];
  return (
    <>
      <h1>react core concept</h1>
      {singers.map((singer) => (
        <Singer key={singer.id} singer={singer}></Singer>
      ))}

      {/* {actors.map((actor) => (
        <Actors name={actor}></Actors>
      ))} */}
      {/* <Food food="Beef" time={time} iseEaten={true} /> */}
      {/* <Food food="Beef" time={time} iseEaten={false} /> */}
      {/* <Dev name="Halim" tech="JS"></Dev> */}
      {/* <Player name="tamim" runs="1234"></Player> */}
    </>
  );
}

export default App;
