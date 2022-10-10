import { useState } from "react";

const useBoolean = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const handleFalse = () => setState(false);
  const handleTrue = () => setState(true);
  const handleToggle = () => setState(!state);

  return [
    state,
    {
      setFalse: handleFalse,
      setTrue: handleTrue,
      setToggle: handleToggle,
    },
  ];
};

export default useBoolean;
