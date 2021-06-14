import Table from "./components/Table";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className='container-fluid d-flex align-items-center flex-column'>
      <h1 className='p-5'>What's your favorite programming language ?</h1>
      <button className='btn btn-success mb-4' onClick={showModalHandler}>
        Add New
      </button>
      <Modal show={showModal} onClose={closeModalHandler} />
      <Table />
    </div>
  );
}

export default App;
