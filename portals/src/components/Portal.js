import React from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal.js";

const Portal = (props) => {
  const { ...restProps } = props;
  const container = document.querySelector("#modal");
  return createPortal(<Modal {...restProps} />, container);
};

export default Portal;
