import React from 'react';
import { createPortal } from 'react-dom';

const Modal = (props) => {

   return (
      <div>
         <p>Hello Modal.</p>
      </div>
   );
};
  
const Portal = (props) => {
   const container = document.querySelector('#modal');

   return createPortal(<Modal/>, container);
};

export default Portal;
  