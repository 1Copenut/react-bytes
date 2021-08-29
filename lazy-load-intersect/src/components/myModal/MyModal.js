import Modal from 'react-modal';

Modal.setAppElement('#root');

const MyModal = ({ modalIsOpen, closeModal, subtitle }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
    </Modal>
  );
};

export default MyModal;
