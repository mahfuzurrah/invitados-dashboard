import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaPen } from "react-icons/fa6";
import Selector from "react-select"; // Assuming you want to use react-select for the selector component
import InputField from "../inputField/InputField";
import TextField from "../inputField/TextField";

function ManageRolePopup() {
  const [selectedOption, setSelectedOption] = useState(null);
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

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Selected: ${selectedOption.label}`);
  };

  const years = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

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
              label="Full Name "
              star="*"
              value={title}
              onChange={handleTitleChange}
            />
            <div className="mt-3">
              <label htmlFor="">Role Name *</label>
              <Selector
                options={years}
                onChange={handleChange}
                placeholder="All Year"
                value={selectedOption}
              />
            </div>
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
