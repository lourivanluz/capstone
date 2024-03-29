import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  height: 900px;
  min-height: calc(100vh - 50px);
  width: 80vw;
  max-width: 400px;
  margin: 0 auto;
  padding: 4.5em 0 4em 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2.5em;
  }

  button {
    font-size: 20px;
    width: 80vw;
    max-width: 320px;
    margin-top: 1em;
  }
`;
