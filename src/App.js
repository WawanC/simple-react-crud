import Table from "./components/Table";
import Modal from "./components/Modal";
import { useState, useContext, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import FormContext from "./store/form-context";
import { DB_PATH } from "./secret/db-data";

function App() {
  const formCtx = useContext(FormContext);
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    formCtx.toggleError(false);
    setShowModal(false);
  };

  // FETCH DATA
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(DB_PATH + "data.json");
      const resData = await response.json();

      let fetchedData = [];
      for (const key in resData) {
        fetchedData.push({
          name: resData[key].name,
          language: resData[key].language,
        });
      }

      setUserData(fetchedData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className='container-fluid d-flex align-items-center flex-column'>
      <h1 className='p-5'>What's your favorite programming language ?</h1>
      {isLoading ? (
        <Spinner animation='border' />
      ) : (
        <>
          <Button variant='success' className='mb-4' onClick={showModalHandler}>
            Add New
          </Button>
          <Modal show={showModal} onClose={closeModalHandler} />
          <Table data={userData} />
        </>
      )}
    </div>
  );
}

export default App;
