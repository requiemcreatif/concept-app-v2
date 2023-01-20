import React from "react";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";
import InputForm from "../../components/registerComponents/InputForm";

const Profile = () => {
  const { user, showAlert, updateUser, isLoading } = useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!name | !email || !lastName) {
    //   showAlert({ msg: "Please fill all fields", type: "danger" });
    //   return;
    // }
    updateUser({ name, email, lastName });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <InputForm
          type="text"
          name="name"
          value={name}
          handlerChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <InputForm
          type="text"
          labelText="last name"
          name="lastName"
          value={lastName}
          handlerChange={(e) => setLastName(e.target.value)}
          placeholder="lastName"
        />
        <InputForm
          type="email"
          name="email"
          value={email}
          handlerChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <button type="submit" className="btn" disabled={isLoading}>
          {isLoading ? "Loading..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
