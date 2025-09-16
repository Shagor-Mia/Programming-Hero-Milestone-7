import React from "react";

const Post = ({ post }) => {
  return (
    <div style={{ border: "2px solid green", marginTop: "12px" }}>
      <h3>{post.title}</h3>
      <h4>{post.body}</h4>
    </div>
  );
};

export default Post;
