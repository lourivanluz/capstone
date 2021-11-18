import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 3rem 0;
  justify-content: center;

  h1 {
    width: 100%;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5em;
    font-weight: 600;
  }

  div {
    width: 300px;
    margin: 1rem;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1em;
      text-align: center;
      font-weight: 600;
      color: red;
    }

    p {
      font-size: 1.2rem;
      text-align: center;
      color: var(--fontColor-primary);
    }
  }
`;
