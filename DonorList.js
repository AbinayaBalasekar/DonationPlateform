import React, { useEffect, useState } from "react";
import API from "../api/api";

function DonorList({ campaignId }) {

  const [donors, setDonors] = useState([]);

  useEffect(() => {
    if (campaignId) fetchDonors();
  }, [campaignId]);

  const fetchDonors = async () => {
    const res = await API.get(`/donations/${campaignId}`);
    setDonors(res.data);
  };

 return (
  <div>
    <h2>Donor List</h2>

    {!campaignId ? (
      <p>Select a campaign</p>
    ) : donors.length === 0 ? (
      <p>No donors yet</p>
    ) : (
      donors.map((d, i) => (
        <div key={i}>
          <p><b>{d.donorName}</b> donated ₹{d.amount}</p>
          <p>{d.message}</p>
          <hr />
        </div>
      ))
    )}
  </div>
);
}
export default DonorList;