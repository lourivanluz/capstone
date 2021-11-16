import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContent = styled.div`
  width: 100%;
  background-color: #bebebe;
  color: #000;
  text-align: center;
  padding: 10px;
  form {
    margin: 0 auto;
  }
  h1 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const AboutContent = styled.div`
  background-color: #000;
  width: 100%;
  color: #fff;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  div {
    width: 50%;
    text-align: center;
    padding-top: 10px;
    p {
      text-align: left;
      padding-left: 20px;
    }
    h1 {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: bold;
    }
  }
`;
