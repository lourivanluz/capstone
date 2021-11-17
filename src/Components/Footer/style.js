import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-primary);
  width: 100%;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  max-width: 90vw;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 0;
  color: #fff;
  div {
    width: 90%;
    text-align: left;
    p {
      font-size: 16px;
      text-align: left;
    }
    h3 {
      margin-bottom: 1rem;
      margin-top: 1.5rem;
      font-size: 22px;
      font-weight: bold;
    }
  }

  @media (min-width: 824px) {
    flex-direction: row;

    div {
      width: 40%;
    }
  }
`;
