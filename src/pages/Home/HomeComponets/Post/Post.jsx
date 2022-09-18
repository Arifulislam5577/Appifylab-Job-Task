import React from "react";
import Reaction from "./Reaction";
import PostUser from "./PostUser";
import Comment from "./Comment";

const Post = () => {
  return (
    <div className="rounded-md bg-white p-5">
      <PostUser
        username="annan chowdary"
        postTime="1 hour ago"
        feelings=""
        group=""
      />
      <Reaction />
      <Comment />
    </div>
  );
};

export default Post;
