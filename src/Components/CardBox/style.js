import styled from "styled-components";

export const BoxCardContainer = styled.li`
  width: 300px;
  min-width: 300px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border: 1px solid #eee9e9;
  border-radius: 5px;
  color: var(--fontColor-primary);
  transition: transform 0.75s;
  img {
    width: 250px;
    height: 180px;
    border-radius: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }
  .weight {
    margin-left: 215px;
  }
  .content {
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
  .plus {
    font-weight: bold;
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
