import React, { useState } from "react";
import API from "../api/api";

function AddCampaign() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    targetAmount: "",
    category: "",
    createdBy: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      await API.post("/campaigns", formData);
      setMessage("Campaign Created");
    } catch {
      setMessage("Error creating campaign");
    }
  };

  return (
    <div>
      <h2>Add Campaign</h2>

      <input name="title" placeholder="Title" onChange={handleChange} />
      <br /><br />

      <input name="description" placeholder="Description" onChange={handleChange} />
      <br /><br />

      <input name="targetAmount" placeholder="Amount" onChange={handleChange} />
      <br /><br />

      <input name="category" placeholder="Category" onChange={handleChange} />
      <br /><br />

      <input name="createdBy" placeholder="Created By" onChange={handleChange} />
      <br /><br />

      <button onClick={handleSubmit}>Create</button>

      <p>{message}</p>
    </div>
  );
}

export default AddCampaign;