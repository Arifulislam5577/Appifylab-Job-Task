import React from "react";
import FriendRequest from "./FriendsComponents/FriendRequest";
import SearchFriend from "./FriendsComponents/SearchFriend";

const FriendsArea = () => {
  return (
    <div className="flex  gap-5 flex-col">
      <FriendRequest />
      <SearchFriend />
    </div>
  );
};

export default FriendsArea;
