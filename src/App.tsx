import "./App.css";
import GridSquare from "./GridSquare";

const colours: string[] = [
  "red",
  "purple",
  "orange",
  "blue",
  "green",
  "yellow",
];

function App() {
  return (
    <div>
      <GridSquare colours={colours} />
    </div>
  );
}

export default App;
