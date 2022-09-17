import React from "react";
import Stories from "./PostsComponents/Stories";

const PostsArea = () => {
  return (
    <div className="posts-area flex flex-col gap-5 ">
      <Stories />
    </div>
  );
};

export default PostsArea;
