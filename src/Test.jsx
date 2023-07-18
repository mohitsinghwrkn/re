import React from "react";
import LikeButton from "./components/Blogs/LikeButton";

const Test = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontSize: "32px",
          border: "2px solid black",
          margin: "1vw 25vw",
        }}
      >
        Testing React Component :{" "}
        <span style={{ color: "green" }}>
          TEST OK <hr />{" "}
        </span>
      </div>
      <LikeButton />
    </>
  );
};

export default Test;
