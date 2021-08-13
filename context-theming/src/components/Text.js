import React from "react";

const Text = (props) => {
  const { theme } = props;

  return <h1 style={{ color: `${theme}` }}>{theme}</h1>;
};

export default Text;
