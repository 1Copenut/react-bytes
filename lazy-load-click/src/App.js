import React, { Suspense, lazy, useState } from "react";
import Button from "./components/button/Button";
// import Message from "./components/message/Message";

const Message = lazy(() => import("./components/message/Message"));

const App = () => {
  const [isVisible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!isVisible);

  return (
    <>
      <Button toggleVisible={toggleVisible} />
      {isVisible && (
        <Suspense fallback={<p>Loading...</p>}>
          <Message />
        </Suspense>
      )}
    </>
  );
};

export default App;
