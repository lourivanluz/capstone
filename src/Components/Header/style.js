import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 50px;
  width: 100vw;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  z-index: 30;

  .header {
    width: 100%;
    max-width: 1024px;
    background-color: gray;
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    .logo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      @media (min-width: 640px) {
        position: static;
        transform: translateY(0);
      }
    }
    .filters {
      display: none;
      @media (min-width: 640px) {
        display: flex;
        align-items: center;
        position: absolute;
        left: 100px;
        height: 100%;
        span {
          margin-right: 15px;
          background-color: violet;
          height: 100%;
          display: flex;
          padding-left: 20px;
          align-items: center;
        }
      }
    }
    .icons {
      padding: 10px;
    }
    .icon-search {
      position: absolute;
      left: 45px;
      background-color: green;
      top: 50%;
      transform: translateY(-50%);
      @media (min-width: 640px) {
        position: static;
        transform: translateY(0);
      }
    }
    .menuContainer {
      padding: 10px;
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (min-width: 640px) {
        display: none;
      }
    }
  }
`;
