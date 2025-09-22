import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";
const bottlesPromise = fetch("botles.json").then((res) => res.json());
function App() {
  return (
    <>
      <Suspense fallback={<h2>bottles loading...</h2>}>
        <Bottles bottlesPromise={bottlesPromise} />
      </Suspense>
    </>
  );
}

export default App;
