import React from "react";
import Explore from "./ExploreComponents/Explore";
import Dawnload from "./ExploreComponents/Dawnload";
import Suggested from "./ExploreComponents/Suggested";

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
