import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination/Pagination";
import Posts from "./components/Posts/Posts";

const App = () => {
  const [posts, setPosts] = useState();
  const [pageNumber, setPageNumber] = useState(1);

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

  const handlePageNumber = (pageNumber) => setPageNumber(pageNumber);

  return (
    <>
      <header>
        <h1>React Query API</h1>
      </header>
      <main>
        <Posts pageNumber={pageNumber} posts={posts} />
        <Pagination
          handlePageNumber={handlePageNumber}
          pageNumber={pageNumber}
        />
      </main>
    </>
  );
};

export default App;
