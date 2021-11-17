import styled from "styled-components";

export const CartContainer = styled.div`
  width: 318px;
  min-height: 100vh;
  position: fixed;
  right: ${({ show }) => (show === true ? "0" : "-325px")};
  top: 0;
  box-shadow: ${({ show }) =>
    show === true ? "1px 1px 8px rgb(0, 0, 0, 0.8)" : ""};
  transition: right 0.3s linear;
  background-color: #ebebeb;
  z-index: 30;

  .headerBag {
    height: 50px;
    padding: 15px;
    background-color: var(--color-primary);
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  ul {
    height: calc(100vh - 238px);
    overflow-y: scroll;
  }

  .priceInfo {
    width: 100%;
    padding: 10px;
    position: absolute;
    bottom: 0;
    background-color: white;
  }
  .bagEmpty {
    padding: 15px;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: gray;
    .iconBag {
      font-size: 35px;
      margin-bottom: 15px;
    }
  }
`;

export const Price = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  text-decoration: ${({ user = false }) =>
    user.subscriber ? "line-through" : ""};
  font-size: 14px;
  span {
    font-size: 18px;
    font-weight: bold;
    color: var(--fontColor-primary);
  }
`;

export const PriceSubscribe = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-decoration: ${({ user = false }) =>
    user.subscriber ? "" : "line-through"};
  font-size: 14px;
  span {
    font-size: 18px;
    font-weight: bold;
    color: var(--color-focus);
  }
`;
