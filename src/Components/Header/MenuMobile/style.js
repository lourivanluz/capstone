import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 318px;
  min-height: 100vh;
  position: fixed;
  left: ${({ show }) => (show === true ? "0" : "-318px")};
  top: 0;
  border: 1px solid red;
  transition: left 0.3s linear;
  background-color: white;

  button {
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;
