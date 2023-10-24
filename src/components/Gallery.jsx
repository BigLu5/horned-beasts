import HornedBeast from "./HornedBeast";

export default function Gallery() {
  return (
    <div>
      <HornedBeast
        title="Goat"
        imgUrl="./src/img/goat.JPG"
        description="The Goat"
      />
      <HornedBeast
        title="Bull"
        imgUrl="./src/img/bull.jpg"
        description="The Bull"
      />
    </div>
  );
}
