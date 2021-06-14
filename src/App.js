import Table from "./components/Table";
import Modal from "./components/Modal";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FormContextProvider } from "./store/form-context";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <FormContextProvider>
      <div className='container-fluid d-flex align-items-center flex-column'>
        <h1 className='p-5'>What's your favorite programming language ?</h1>
        <Button variant='success' className='mb-4' onClick={showModalHandler}>
          Add New
        </Button>
        <Modal show={showModal} onClose={closeModalHandler} />
        <Table />
      </div>
    </FormContextProvider>
  );
}

export default App;
