import ColourBox from "./ColourBox";

type ColourBoxProps = {
  colours: string[];
};

function GridSquare({ colours }: ColourBoxProps) {
  const boxes: JSX.Element[] = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColourBox colours={colours} key={i} />);
  }
  console.log(boxes);
  return <div className="GridSquare">{boxes}</div>;
}

export default GridSquare;
