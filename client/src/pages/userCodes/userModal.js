import styled from "styled-components";

export const Modal = styled.div`
   {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 120;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  }

  &.show {
    opacity: 1;
    visibility: visible;
    animation: fadeIn 0.5s ease-in-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
   {
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 30px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
