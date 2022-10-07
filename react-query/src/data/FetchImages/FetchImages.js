import axios from "axios";
import { useEffect } from "react";

const FetchImages = () => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => console.log(response));
  }, []);
};

export default FetchImages;
