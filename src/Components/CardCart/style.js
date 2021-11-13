import styled from "styled-components";

export const CardCartContainer = styled.div`
  display: flex;
  height: 100px;
  flex-direction: row;
  border: 1px solid green;
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
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    width: calc(100% - 125px);
    justify-content: space-between;
    padding: 10px;

    .quantity {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
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
