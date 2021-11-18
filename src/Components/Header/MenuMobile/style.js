import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 318px;
  min-height: 100vh;
  position: fixed;
  left: ${({ show }) => (show === true ? "0" : "-318px")};
  top: 0;
  transition: left 0.3s linear;
  background-color: white;
  box-shadow: ${({ show }) =>
    show === true ? "1px 1px 8px rgb(0, 0, 0, 0.8)" : ""};
  .headerMenu {
    color: white;
    background-color: var(--color-primary);
    height: 40px;
    padding: 10px;
    font-weight: bold;
  }
  .listMenu {
    ul {
      padding-left: 25px;
      li {
        padding: 8px 0;
        a {
          color: var(--color-primary);
        }
      }
    }
  }

  p {
    padding: 10px 20px;
    background-color: lightgrey;
  }

  button {
    position: absolute;
    right: 5px;
    top: 5px;
    border: none;
    font-size: 20px;
    background-color: transparent;
    color: white;
  }
`;
