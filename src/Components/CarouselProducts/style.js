import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 15px auto;
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
  height: 245px;
  scrollbar-color: #00cd66 #e0eee0;
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
  @media (min-width: 790px) {
    height: 300px;
  }
`;
