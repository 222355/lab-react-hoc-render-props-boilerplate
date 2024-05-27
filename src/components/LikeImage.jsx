import React from "react";
import HocLikeImage from "./HocLikeImage";

const LikeImage = ({ LikeImageCounter, onLikeImageCounter }) => {
  return (
    <div>
      <button onClick={onLikeImageCounter}>
        Like Image {LikeImageCounter}
      </button>
    </div>
  );
};

export default HocLikeImage(LikeImage);
