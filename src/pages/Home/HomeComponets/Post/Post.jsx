import React from "react";
import Reaction from "./Reaction";
import PostUser from "./PostUser";
import Comment from "./Comment";
import UserComment from "./UserComment";

const Post = ({ children, hasComment, username, postTime, reactionName }) => {
  return (
    <div className="rounded-md bg-white p-5">
      <PostUser username={username} postTime={postTime} />
      {children}
      <Reaction reactionName={reactionName} />
      <Comment />
      {hasComment && <UserComment />}
    </div>
  );
};

export default Post;
