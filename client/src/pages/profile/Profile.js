import React from "react";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";
import InputForm from "../../components/registerComponents/InputForm";

const Wrapper = styled.div`
  margin: 5rem auto;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header-profile {
    text-align: center;
  }
  h3 {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const Div = styled.div`
  margin: 5rem auto;
  max-width: 1000px;

  .contact {
    @media (max-width: 768px) {
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
      font-size: 1.2rem;
      font-family: "Montserrat", sans-serif;
    }

    input {
      padding: 2rem;
      border: none;
      margin-bottom: 3rem;
      border-radius: 5px;
      background-color: #ffffff;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    }
    input:focus {
      outline: none;
    }
  }

  .btn {
    margin-top: 2.5rem;
    max-width: 35rem;
    height: 45px;
    border: none;
    padding: 1rem 2rem;
    border-radius: 25px;
    //background-color: #9a1750;
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
    <Wrapper className="global-text">
      <div className="header-profile">
        <h3>Profile</h3>
        <p>Edit your profile</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Div>
          <div className="name ">
            <InputForm
              type="text"
              placeholder="Name"
              name="name*"
              value={name}
              handlerChange={(e) => setName(e.target.value)}
            />

            <InputForm
              type="text"
              placeholder="Last Name"
              //labelText="last name"
              name="lastName*"
              value={lastName}
              handlerChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="contact">
            <InputForm
              type="email"
              placeholder="Email"
              name="Email*"
              value={email}
              handlerChange={(e) => setEmail(e.target.value)}
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
