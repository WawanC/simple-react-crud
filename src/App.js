import Table from "./components/Table";
import Modal from "./components/Modal";
import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import FormContext from "./store/form-context";

function App() {
  const formCtx = useContext(FormContext);
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    formCtx.toggleError(false);
    setShowModal(false);
  };

  return (
    <div className='container-fluid d-flex align-items-center flex-column'>
      <h1 className='p-5'>What's your favorite programming language ?</h1>
      <Button variant='success' className='mb-4' onClick={showModalHandler}>
        Add New
      </Button>
      <Modal show={showModal} onClose={closeModalHandler} />
      <Table />
    </div>
  );
}

export default App;
