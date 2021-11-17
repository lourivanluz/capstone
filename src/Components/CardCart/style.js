import styled from "styled-components";

export const CardCartContainer = styled.div`
  display: flex;
  height: 100px;
  flex-direction: row;
  background-color: white;
  position: relative;
  padding-right: 10px;

  .imgProduct {
    width: 125px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
      height: 66px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    width: calc(100% - 125px);
    justify-content: space-between;
    padding: 10px;

    h1 {
      font-size: 15px;
      color: gray;
    }

    .quantity {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 3px;
      width: 80px;
      margin: 0 auto;
      background-color: var(--color-secondary);
      span {
        width: 30px;
        text-align: center;
        background-color: white;
      }
      button {
        border: none;
        background-color: var(--color-secondary);
        color: white;
        font-weight: bold;
      }
    }
  }
  .delete {
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 50%;
    border: none;
  }
`;
