import React from "react";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";
import InputForm from "../../components/registerComponents/InputForm";

const Wrapper = styled.div`
  margin: 5rem auto;

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

  .name {
    @media (max-width: 768px) {
    }
  }

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
    }

    input {
      padding: 1rem;
      border: none;
      margin-bottom: 3rem;
      //width: 700px;
      //color: #9a1750; // profile input color
      border-bottom: 1px solid #9a1750;
      background-color: transparent;
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
    border-radius: 25px;
    background-color: #9a1750;
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
