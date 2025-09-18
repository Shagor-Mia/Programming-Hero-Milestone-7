import React, { use } from "react";
import Post from "./post";

const Posts = ({ fetchPosts }) => {
  const Posts = use(fetchPosts);
  return (
    <div className="">
      <h2>{Posts.length}</h2>
      {Posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
