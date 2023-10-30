import { useState } from "react";

export default function HornedBeast({
  title,
  img,
  description,
  horns,
  handleShowModal,
}) {
  const [likes, setLikes] = useState(0);
  const [isEnlarged, setIsEnlarged] = useState(false);

  function handleLikes() {
    setLikes(likes + 1);
  }

  function handleImageClick() {
    setIsEnlarged(!isEnlarged);
  }

  return (
    <div className={`animal ${isEnlarged ? "enlarged" : ""}`}>
      <h2>{title}</h2>
      <img src={img} onClick={handleImageClick} />
      <p>"{description}"</p>
      <p>Horns: {horns}</p>
      <p onClick={handleLikes}>Favourites: {likes} ❤️</p>
      <button onClick={() => handleShowModal({ title, img })}>
        Show Information
      </button>
    </div>
  );
}
