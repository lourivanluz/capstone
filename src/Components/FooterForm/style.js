import styled from "styled-components";

export const FormBackground = styled.form`
  width: 100%;
  border-top: 48px solid var(--color-primary);
`;

export const FormContent = styled.div`
  display: flex;
  min-height: 372px;
  width: 556px;
  max-width: 80vw;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 0 auto;

  h2 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .flex {
    display: flex;
    .flex-left {
      margin-right: 0.5rem;
      margin-bottom: 1rem;
      width: 50%;
    }
    .flex-right {
      margin-left: 0.5rem;
      margin-bottom: 1rem;
      width: 50%;
    }
  }

  button {
    margin-top: 1rem;
  }
`;
