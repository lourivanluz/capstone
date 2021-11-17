import styled from "styled-components";

export const FormBackground = styled.form`
  width: 100%;
  border-top: 96px solid var(--color-primary);
`;

export const FormContent = styled.div`
  display: flex;
  width: 556px;
  max-width: 80vw;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 0 auto;

  h2 {
    font-size: 2em;
    text-align: center;
    margin: 1.5rem 0;
  }

  .flex {
    display: flex;
    flex-direction: column;

    .flex-left {
      margin-bottom: 1rem;
      width: 100%;
    }
    .flex-right {
      margin-bottom: 1rem;
      width: 100%;
    }

    @media (min-width: 640px) {
      flex-direction: row;

      .flex-left {
        margin-right: 0.5rem;
        width: 50%;
      }
      .flex-right {
        margin-left: 0.5rem;
        width: 50%;
      }
    }
  }

  button {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
`;
