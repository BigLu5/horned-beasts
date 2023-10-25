import { useState } from "react";

export default function HornedBeast({ title, img, description }) {
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }
  return (
    <div className="animal">
      <h2>{title}</h2>
      <img src={img} alt={title} onDoubleClick={handleLikes} />
      <p>{description}</p>
      <p>Favourite: {likes} ❤️</p>
    </div>
  );
}
