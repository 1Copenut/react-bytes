import { useEffect, useRef, useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const intersectionCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const intersectionOptions = {
      root: document.getElementById("#main"),
      rootMargin: "0px",
      threshold: 0.25,
    };
    const observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.disconnect();
      }
    };
  }, [containerRef]);

  return (
    <main className="app" id="main">
      <h1>Hello world</h1>
    </main>
  );
};

export default App;
