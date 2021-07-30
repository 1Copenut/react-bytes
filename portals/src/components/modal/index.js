import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

/**
 * Modal component
 */
 class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.el = document.createElement('div');
    }
  
    componentDidMount() {
      modalRoot.appendChild(this.el);
    }
  
    componentWillUnmount() {
      modalRoot.removeChild(this.el);
    }
    
    render() {
      return ReactDOM.createPortal(
        this.props.children,
        this.el,
      );
    }
  }

Modal.propTypes = {
	message: PropTypes.string
};

export default Modal;