import React, { Suspense, lazy, useState } from "react";
import Button from "./components/button/Button";
// import Message from "./components/message/Message";

const Message = lazy(() => import("./components/message/Message"));

const App = () => {
  const [isVisible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!isVisible);

  return (
    <main>
      <h1>Click to lazy load an important message</h1>
      <p>
        Open your Developer Tools, and select the <strong>Network</strong> tab.
        When you click the "Load" button, you should see a new Webpack chunk
        added to the list of items. This is how you'll know the React.lazy load
        is working correctly.
      </p>
      <p>
        Enable{" "}
        <a href="https://css-tricks.com/throttling-the-network/">
          network throttling
        </a>{" "}
        to see the Suspense fallback behavior.
      </p>
      <Button toggleVisible={toggleVisible} />
      {isVisible && (
        <Suspense fallback={<p>Loading...</p>}>
          <Message />
        </Suspense>
      )}
    </main>
  );
};

export default App;
