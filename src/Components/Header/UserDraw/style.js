import styled from "styled-components";

export const UserDrawContainer = styled.div`
  width: 200px;
  border-radius: 0px 0px 5px 5px;
  background-color: white;
  position: absolute;
  right: 0;
  top: 50px;
  -webkit-animation: scale-up-tr 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: scale-up-tr 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  ul {
    padding-top: 10px;
    li {
      color: var(--fontColor-primary);
      padding: 10px 5px;
      border-bottom: 1px solid lightgrey;
      &:hover {
        color: black;
      }
    }
  }
  .linkRegister {
    color: grey;
    text-decoration: underline;
    cursor: pointer;
  }
  .formContainer {
    padding: 15px 5px;
  }

  @keyframes scale-up-tr {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
  }
`;
