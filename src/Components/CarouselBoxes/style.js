import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 620px;
  margin: 0 auto;
  h2 {
    font-variant: small-caps;
    font-weight: bold;
    color: #5f9ea0;
  }
`;

export const ContainerUl = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  padding: 2px;
  height: 280px;
  scrollbar-color: #00cd66 #e0eee0;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 5px;
    height: 7px;
  }
  ::-webkit-scrollbar-track {
    background: #5f9ea0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #00cd66;
    border-radius: 20px;
    border: 1px solid #00cd66;
    width: 30px;
  }
`;
