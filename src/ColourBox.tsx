import { useState } from "react";

type ColourBoxProps = {
  colours: string[];
};

function getRandomColour(arr: string[]): string {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function ColourBox({ colours }: ColourBoxProps) {
  const [colour, setColour] = useState(getRandomColour(colours));
  const changeColour = () => {
    const randomColour = getRandomColour(colours);
    setColour(randomColour);
  };
  return (
    <div
      className="ColourBox"
      onClick={changeColour}
      style={{ backgroundColor: colour }}
    ></div>
  );
}

export default ColourBox;
