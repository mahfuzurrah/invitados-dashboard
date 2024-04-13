import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaPen } from "react-icons/fa6";
import Selector from "react-select";
import InputField from "../inputField/InputField";

function ManageUserPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [type, setType] = useState("social");  // Default type is social
  const [role, setRole] = useState("client"); // Default role is client
  const [clientId, setClientId] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTypeChange = (selectedOption) => {
    setType(selectedOption.value);
    if (selectedOption.value === "social") {
      setFullName("");
      setPassword(""); // Clear full name and password if type is social
    }
  };

  const handleRoleChange = (selectedOption) => {
    setRole(selectedOption.value);
  };

  const types = [
    { value: "social", label: "Social" },
    { value: "local", label: "Local" },
  ];

  const roles = [
    { value: "admin", label: "Admin" },
    { value: "client", label: "Client" },
  ];

  return (
    <>
      <button onClick={handleShow}>
        <FaPen className="icons" />
      </button>
      <Modal show={show} onHide={handleClose} className="add_label">
        <Modal.Header closeButton>
          <Modal.Title>User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input_group">
            <InputField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-3">
              <label>Type *</label>
              <Selector
                options={types}
                placeholder="Select Type"
                onChange={handleTypeChange}
                value={types.find((option) => option.value === type)}
              />
            </div>
            <div className="mt-3">
              <label>Role *</label>
              <Selector
                options={roles}
                placeholder="Select Role"
                onChange={handleRoleChange}
                value={roles.find((option) => option.value === role)}
              />
            </div>
            <InputField
              label="Client ID"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
            />
            {type === "local" && (
              <>
                <InputField
                  label="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <InputField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </>
            )}
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

export default ManageUserPopup;
