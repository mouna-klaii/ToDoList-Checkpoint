import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { editTask } from "../JS/Actions/Action";
import { useDispatch } from "react-redux";

const EditModal = ({task}) => {
  const dispatch = useDispatch()
  const [edited , setEdited] = useState(task.text)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelEdit = () => {
    dispatch(editTask(task.id , edited))
    handleClose()
  }

  return (
    <div>
      <Button size="sm" onClick={handleShow} variant="outline-info">Edit</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Task :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Edit Text"
                autoFocus
                value={edited}
                onChange={(e) => setEdited(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModal;
