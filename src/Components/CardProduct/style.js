import styled from "styled-components";

export const ProductCardContainer = styled.li`
  width: 150px;
  min-width: 150px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #eee9e9;
  border-radius: 5px;
  color: var(--fontColor-primary);
  transition: transform 0.75s;
  img {
    width: 130px;
    height: 90px;
    border-radius: 5px;
    cursor: pointer;
  }
  div {
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
  }
  .subscribe {
    color: var(--color-focus);
  }
  .title {
    flex-grow: 1;
    margin-top: 20px;
  }
  .weight {
    font-weight: bold;
  }
  p {
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
  span {
    font-size: 12px;
  }
  button {
    margin-top: 20px;
  }
  :hover {
    transform: translate(-1px, -1px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
  @media (min-width: 790px) {
    height: 280px;
    min-width: 200px;
    img {
      width: 180px;
      height: 120px;
    }
  }
`;

export const PriceStyle = styled.span`
  text-decoration: ${({ user = false }) =>
    user.subscriber ? "" : "line-through"};
`;

export const PriceSubscribeStyle = styled.span`
  text-decoration: ${({ user = false }) =>
    user.subscriber ? "line-through" : ""};
`;
