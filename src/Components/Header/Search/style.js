import styled from "styled-components";

export const SearchContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1044px;
  height: 100vh;
  background-color: yellow;
  top: 0;
  left: 0;
  .inputsContainer {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid grey;

    input {
      height: 30px;
      width: 310px;
    }
    button {
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .closeSearch {
      position: absolute;
      right: 15px;
    }
  }
`;
