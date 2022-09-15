import React from "react";
import Dawnload from "./Dawnload";
import Explore from "./Explore";
import Suggested from "./Suggested";

const ExploreArea = () => {
  return (
    <div className="flex flex-col gap-5">
      <Explore />
      <Dawnload />
      <Suggested />
    </div>
  );
};

export default ExploreArea;
