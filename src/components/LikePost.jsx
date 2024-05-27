import React from "react";
import RenderLikePost from "./RenderLikePost";

export default function LikePost() {
  return (
    <RenderLikePost
      render={({ like, onLike }) => (
        <diV>
          <button onClick={onLike}>Like post {like}</button>
        </diV>
      )}
    />
  );
}
