import HornedBeast from "./HornedBeast";

export default function Gallery() {
  return (
    <div>
      <HornedBeast
        title="Rhino"
        imgUrl="./src/img/goat.JPG"
        description="The Goat"
      />
      <HornedBeast
        title="Elephant"
        imgUrl="./src/img/bull.jpg"
        description="The Bull"
      />
    </div>
  );
}
