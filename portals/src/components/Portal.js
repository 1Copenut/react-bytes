import React from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal.js";

const Portal = (props) => {
  const container = document.querySelector("#modal");
  return createPortal(<Modal />, container);
};

export default Portal;
