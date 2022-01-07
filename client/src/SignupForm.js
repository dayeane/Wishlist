import React, { useState } from "react";
// import { Link } from "react-router-dom";

function SignupForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email_address: "",
    // password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("/signup", configObj).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          console.log(user);
          setUser(user);
        });
      } else {
        resp.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className="mt-6 mr-2 text-center">Sign Up</h3>
        <p className="text-center">
          <label className="mr-2" htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p className="text-center">
          <label className="mr-2" htmlFor="email_address">Email:</label>
          <input
            type="text"
            name="email_address"
            value={formData.email_address}
            onChange={(e) => handleChange(e)}
          />
        </p>
        {/* <p>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />
        </p> */}
        <p className="text-center">
          <button className="btn btn-primary mt-3 mb-3" type="submit">Sign Up</button>
        </p>
        
        {/* <p>
          <Link to="/">Log In</Link>
        </p> */}
      </form>
    </div>
  );
}

export default SignupForm;