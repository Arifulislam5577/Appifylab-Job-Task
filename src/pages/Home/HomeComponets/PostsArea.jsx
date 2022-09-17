import React from "react";
import Post from "./Post/Post";
import CreatePost from "./PostsComponents/CreatePost";
import PostType from "./PostsComponents/PostType";
import Stories from "./PostsComponents/Stories";

const PostsArea = () => {
  return (
    <div className="posts-area flex flex-col gap-5">
      <Stories />
      <CreatePost />
      <PostType />
      <Post />
    </div>
  );
};

export default PostsArea;
