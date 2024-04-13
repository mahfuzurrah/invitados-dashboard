import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaPen } from "react-icons/fa6";
import InputField from "../inputField/InputField";
import TextField from "../inputField/TextField";

function ManageRolePopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <>
      <button onClick={handleShow}>
        <FaPen className="icons" />
      </button>
      <Modal show={show} onHide={handleClose} className="add_label">
        <Modal.Header closeButton>
          <Modal.Title>Role Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input_group">
            <InputField
              label="Role name"
              star="*"
              value={title}
              onChange={handleTitleChange}
            />
            <TextField
              label="Description"
              type="text"
              value={comment}
              onChange={handleCommentChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ManageRolePopup;
