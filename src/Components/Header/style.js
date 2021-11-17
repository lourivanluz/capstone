import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 50px;
  width: calc(100vw - 17px);
  background-color: white;
  display: flex;
  justify-content: center;
  z-index: 30;
  border-bottom: 1px solid lightgrey;
  position: fixed;
  top: 0;

  .header {
    width: 100%;
    max-width: 1024px;
    background-color: white;
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    .logo {
      position: absolute;
      width: 60px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
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
          height: 100%;
          display: flex;
          padding-left: 20px;
          align-items: center;
          color: var(--fontColor-primary);
          &:hover {
            font-weight: bold;
            color: var(--color-primary);
          }
        }
      }
    }
    .iconsContainer {
      display: flex;
    }
    .bagContainer {
      position: relative;
    }
    .numberOfCart {
      width: 20px;
      height: 20px;
      background-color: red;
      position: absolute;
      top: -4px;
      right: -2px;
      font-size: 15px;
      text-align: center;
      border-radius: 50%;
      color: white;
    }
    .icons {
      height: 20px;
      width: 20px;
      margin: 0 8px;
      color: gray;
      cursor: pointer;
      padding: 5px;
      &:hover {
        color: var(--color-primary);
      }
    }
    .icon-search {
      position: absolute;
      left: 45px;
      top: 50%;
      transform: translateY(-50%);
      @media (min-width: 640px) {
        position: static;
        transform: translateY(0);
      }
    }
    .menuContainer {
      padding: 10px;
      color: var(--fontColor-primary);
      display: flex;
      justify-content: center;
      align-items: center;
      @media (min-width: 640px) {
        display: none;
      }
    }
  }
  .buyAbox {
    border: none;
    height: 25px;
    border-radius: 7px;
    width: 150px;
    &:hover {
      background-color: var(--color-primary);
      color: white;
    }
  }
`;
