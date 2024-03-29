import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  h2 {
    font-variant: small-caps;
    font-weight: bold;
    color: var(--fontColor-primary);
  }
`;

export const ContainerUl = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  padding: 2px;
  height: 280px;
  scrollbar-color: var(--color-secondary) var(--fontColor-primary);
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--fontColor-primary);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-focus);
    border-radius: 20px;
    border: 1px solid var(--color-secondary);
    width: 30px;
  }
`;
