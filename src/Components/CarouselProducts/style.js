import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 755px;
  margin: 0 auto;
`;

export const ContainerUl = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  padding: 2px;
  height: 320px;
  scrollbar-color: #00cd66 #e0eee0;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: red;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #00cd66;
    border-radius: 20px;
    border: 1px solid #00cd66;
    width: 30px;
  }
`;
