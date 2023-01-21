import React from "react";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";
import InputForm from "../../components/registerComponents/InputForm";

const Div = styled.div`
  margin: 5rem auto;
  max-width: 1000px;

  .form-input {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 0.5rem;
      text-transform: capitalize;
    }
  }

  h3 {
    text-align: center;
  }
  form {
    margin: 0 auto;
    //display: flex;
    //flex-direction: column;
    //gap: 1rem;
  }

  input {
    padding: 1rem;
    border: none;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  input:focus {
    outline: none;
  }

  .btn {
    margin-top: 2rem;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;

const Profile = () => {
  const { user, displayAlert, updateUser, isLoading } = useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!name | !email || !lastName) {
    //   displayAlert({ msg: "Please fill all fields", type: "danger" });
    //   return;
    // }
    updateUser({ name, email, lastName });
  };

  return (
    <Div>
      <h3>Profile</h3>
      <form onSubmit={handleSubmit}>
        <div>
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
        </div>
        <div>
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
        </div>
      </form>
    </Div>
  );
};

export default Profile;
