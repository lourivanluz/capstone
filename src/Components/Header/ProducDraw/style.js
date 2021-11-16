import styled from "styled-components";

export const ProductsDrawStyle = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  position: fixed;
  background-color: transparent;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  top: 50px;
  left: 0;
  ul {
    width: 100%;
    max-width: 1024px;
    padding: 20px 10px;
    background-color: white;
    margin: 0 auto;

    li {
      margin: 10px;
    }

    a {
      color: var(--fontColor-primary);
      &:hover {
        color: var(--color-primary);
        text-decoration: underline;
      }
    }
  }
`;
