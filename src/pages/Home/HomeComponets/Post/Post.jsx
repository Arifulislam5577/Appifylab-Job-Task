import React from "react";
import Reaction from "./Reaction";
import PostUser from "./PostUser";
import Comment from "./Comment";
import UserComment from "./UserComment";

const Post = ({ children, hasComment }) => {
  return (
    <div className="rounded-md bg-white p-5">
      <PostUser
        username="annan chowdary"
        postTime="1 hour ago"
        feelings=""
        group=""
      />
      {children}
      <Reaction />
      <Comment />
      {hasComment && <UserComment />}
    </div>
  );
};

export default Post;
