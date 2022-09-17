import React from "react";

const PostType = () => {
  return (
    <div className="rounded-md bg-white px-5 py-3 flex items-center gap-3">
      <button className="text-sm text-darkLight capitalize text-red-500 font-medium">
        public post
      </button>
      <button className="text-sm text-darkLight capitalize font-medium">
        firend post
      </button>
    </div>
  );
};

export default PostType;
