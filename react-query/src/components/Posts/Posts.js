import React from "react";

const Posts = (props) => {
  const { posts } = props;

  if (!posts) {
    return <div>Loading...</div>;
  }

  if (posts && posts.length > 0) {
    const allPosts = posts.map((post) => {
      return <li key={post.id}>{post.title}</li>;
    });

    return <ul>{allPosts}</ul>;
  }
};

export default Posts;
