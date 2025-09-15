import React, { use } from "react";

const Users = ({ fetchUser }) => {
  const users = use(fetchUser);
  console.log(users);
  return (
    <div className="users">
      <h2>Users:{users.length}</h2>
    </div>
  );
};

export default Users;
