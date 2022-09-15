import React from "react";
import ExploreArea from "./HomeComponets/ExploreArea";
import PostsArea from "./HomeComponets/PostsArea";
import FriendsArea from "./HomeComponets/FriendsArea";

const Home = () => {
  return (
    <main className="md:py-10 py-5">
      <div className="container grid lg:grid-cols-12 grid-cols-1 gap-5 items-start justify-between">
        {/* LEFT SIDE */}
        <div className="md:col-span-3 hidden lg:block ">
          <ExploreArea />
        </div>
        {/* MIDDLE SIDE */}
        <div className="md:col-span-6 col-span-12 w-full min-h-screen overflow-scroll">
          <PostsArea />
        </div>
        {/* RIGHT SIDE */}
        <div className="md:col-span-3 hidden lg:block ">
          <FriendsArea />
        </div>
      </div>
    </main>
  );
};

export default Home;
