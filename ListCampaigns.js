import React, { useEffect, useState } from "react";
import API from "../api/api";

function ListCampaigns({ setCampaignId }) {

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const res = await API.get("/campaigns");
      setCampaigns(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Campaigns List</h2>

      {campaigns.length === 0 ? (
        <p>No Campaigns</p>
      ) : (
        campaigns.map((c) => (
          <div key={c._id}>
            <h4>{c.title}</h4>
            <p>{c.description}</p>

            <p><b>Category:</b> {c.category}</p>
            <p><b>Created By:</b> {c.createdBy}</p>

            <p><b>Target:</b> ₹{c.targetAmount?.toLocaleString()}</p>
            <p><b>Raised:</b> ₹{c.raisedAmount?.toLocaleString()}</p>

            <button onClick={() => setCampaignId(c._id)}>
              Donate
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default ListCampaigns;