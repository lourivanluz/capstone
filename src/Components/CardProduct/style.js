import styled from "styled-components";

export const ProductCardContainer = styled.li`
  width: 150px;
  min-width: 150px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border: 1px solid #000;
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
  p {
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
  span {
    font-size: 12px;
  }
  button {
    margin-top: 10px;
  }
  :hover {
    transform: translate(-1px, -1px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;
