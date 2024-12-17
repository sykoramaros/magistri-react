import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddSubject } from "../../Services/SubjectService/AddSubject";

const Create = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const HandleSubmit = (event) => {
    event.preventDefault();
    AddSubject({ name })
      .then((response) => navigate("/subjects"))
      .catch((error) => console.error("Error creating subject", error));
  };

  return (
    <div className="container">
      <h1>Create a new subject</h1>
      <form className="mt-4" onSubmit={HandleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;