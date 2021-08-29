import Modal from 'react-modal';

Modal.setAppElement('#root');

const MyModal = ({
  ariaLabel,
  modalIsOpen,
  closeModal,
  modalTitle,
  children,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel={ariaLabel}
    >
      <h2>{modalTitle}</h2>
      <button onClick={closeModal}>close</button>
      {children}
    </Modal>
  );
};

export default MyModal;
