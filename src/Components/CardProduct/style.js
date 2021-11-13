import styled from "styled-components";

export const ProductCardContainer = styled.li`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #000;
  transition: transform 0.75s;
  img {
    width: 180px;
    height: 120px;
    cursor: pointer;
  }
  div {
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
  }
  p {
    padding: 4px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  :hover {
    transform: translate(-1px, -1px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;
