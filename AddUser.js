import React, { useState } from "react";
import API from "../api/api";

function AddUser(){
const [formData,setFormData]=useState({
 name:"",
 email:"",
password:""
});

const handleChange = (e) => {
const {name,value}=e.target;

setFormData((prevData)=>({
...prevData,
[name]:value
}));
};

const handleSubmit = async (e) => {
e.preventDefault();
await API.post("/users/register",formData);
alert("User Added Successfully");
setFormData({
name:"",
email:"",
password:""
});
};
return (
<div>
 <form onSubmit={handleSubmit}>
   <input
     type="text"
     name="name"
     placeholder="Enter your Name"
     value={formData.name}
     onChange={handleChange}
    />
   <br /><br />
   <input
     type="text"
     name="email"
     placeholder="Enter a valid email"
     value={formData.email}
     onChange={handleChange}
    />
    <br /> <br />
   <input
     type="password"
     name="password"
     placeholder="Your Password"
     value={formData.password}
     onChange={handleChange}
    />
   <br /> <br />
   <button type="submit">Register</button>
   </form>
  </div>
 );
}
export default AddUser;