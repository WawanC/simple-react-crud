import { Modal, Button } from "react-bootstrap";

const MyModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={props.onClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
