import styled from "styled-components";

export const CardSearchContainer = styled.li`
  width: 70%;
  min-width: 300px;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--fontColor-primary);
  margin: 0 auto;
  color: var(--fontColor-primary);
  img {
    width: 100px;
    height: 80px;
    cursor: pointer;
  }
  div {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    flex-grow: 2;
    h3 {
      font-weight: bold;
      margin-bottom: 5px;
      font-size: 14px;
      text-align: left;
      cursor: pointer;
    }
    span {
      font-size: 12px;
    }
  }
`;
