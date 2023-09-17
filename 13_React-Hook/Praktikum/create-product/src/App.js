import { useEffect, useState } from "react";
import "./App.css";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="App">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is a Create Product Page! You can add your products
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <CreateProduct />
    </div>
  );
}

export default App;
