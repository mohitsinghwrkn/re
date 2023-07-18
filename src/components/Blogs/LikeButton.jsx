import React, { useState, useEffect } from "react";
import axios from "axios";
const EX = import.meta.env.VITE_EX;

const LikeButton = () => {
  const [like, setLike] = useState(0),
    [isLike, setIsLike] = useState(false);

  useEffect(() => {
    const run = () => {
      axios
        .get(EX + "/ex/showLike")
        .then((res) => res.data)
        .then((res) => setLike(res.like));
    };
    run();
  }, []);

  const onLikeButtonClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };

  if (like == 0) {
    console.log("zero");
  } else {
    console.log(like)
    axios.post(EX + "/ex/like/", { like: like });
  }

  return (
    <>
      <button
        className={"like-button " + (isLike ? "liked" : "")}
        onClick={onLikeButtonClick}
      >
        {isLike ? "❤" : "🤍"} | {like}
      </button>
      <style>{`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
        }
        .liked {
            font-weight: bold;
            color: green;
          }
      `}</style>
    </>
  );
};

export default LikeButton;
