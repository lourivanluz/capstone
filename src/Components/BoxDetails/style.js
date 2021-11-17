import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  padding-top: 3.5rem;
  flex-flow: row wrap;
  width: 1024px;
  max-width: 95vw;
  margin: 0 auto;

  img {
    width: 35%;
    object-fit: cover;
    margin-right: 4rem;
    margin-bottom: 3rem;
  }

  div {
    width: 50%;
    padding-right: 4rem;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1em;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.5em;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.2rem;
    margin: 1em 0;
    font-weight: 600;
  }

  h5 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1em;
  }

  p {
    font-size: 1rem;
    line-height: 1.5em;
  }

  li {
    font-size: 1.1rem;
    max-width: 320px;
    padding: 0.4em 0;
    padding-left: 1em;
  }

  .dark {
    background-color: lightgray;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;

    img {
      display: none;
    }

    div {
      width: 100%;
    }

    button {
      width: 45%;
      min-width: 300px;
    }
  }
`;
