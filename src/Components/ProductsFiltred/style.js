import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    font-variant: small-caps;
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
    color: var(--fontColor-primary);
  }
`;

export const ContainerUl = styled.ul`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
