import styled from "styled-components";

export const CartContainer = styled.div`
  width: 320px;
  min-height: 100vh;
  position: fixed;
  right: ${({ show }) => (show === true ? "0" : "-325px")};
  top: 0;
  border: 1px solid red;
  transition: right 0.3s linear;
`;
