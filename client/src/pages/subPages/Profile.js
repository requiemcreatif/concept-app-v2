import React from "react";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";
import InputForm from "../../components/registerComponents/InputForm";

const Wrapper = styled.div`
  margin: 5rem auto;
  h3 {
    text-align: center;
  }
`;

const Div = styled.div`
  margin: 5rem auto;
  max-width: 1000px;
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
  gap: 1rem;

  .name {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 0 1rem;
    }
  }

  .contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    aling-items: center;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 0 1rem;

      .btn {
        margin: 1rem auto;
        width: 100%;
      }
    }
  }

  .form-input {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 0.5rem;
      text-transform: capitalize;
    }

    input {
      padding: 1.5rem;
      border: none;
      border-radius: 5px;
      margin-bottom: 1rem;
    }
    input:focus {
      outline: none;
    }
  }

  .btn {
    margin-top: 2.5rem;
    width: 200px;
    height: 45px;
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
    <Wrapper>
      <h3>Profile</h3>
      <form onSubmit={handleSubmit}>
        <Div>
          <div className="name">
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
          <div className="contact">
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
        </Div>
      </form>
    </Wrapper>
  );
};

export default Profile;
