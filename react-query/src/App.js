import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination/Pagination";
import Posts from "./components/Posts/Posts";

const App = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios({
          url: "https://jsonplaceholder.typicode.com/posts",
          method: "get",
        });

        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <header>
        <h1>React Query API</h1>
      </header>
      <main>
        <Posts posts={posts} />
        <Pagination />
      </main>
    </>
  );
};

export default App;
