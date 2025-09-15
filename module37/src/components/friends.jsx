import React, { use } from "react";
import Friend from "./friend";

const Friends = ({ fetchFriends }) => {
  const friends = use(fetchFriends);
  return (
    <div>
      <h3>friends:{friends.length}</h3>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
