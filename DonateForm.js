import React, { useState } from "react";
import API from "../api/api";

function DonateForm({ campaignId }) {

  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!campaignId) {
      alert("Select a campaign first");
      return;
    }

    try {
      await API.post("/donations", {
        ...formData,
        campaignId
      });

      alert("Donation Successful");

    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

  return (
    <div>
      <h2>Donate</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <br /><br />

        <input name="amount" placeholder="Amount" onChange={handleChange} />
        <br /><br />

        <input name="message" placeholder="Message" onChange={handleChange} />
        <br /><br />

        <button type="submit">Donate</button>
      </form>
    </div>
  );
}

export default DonateForm;