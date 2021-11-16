import styled from "styled-components";

export const ModalShadow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 40;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  display: flex;
  width: 95vw;
  max-width: 380px;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: white;
  border-radius: 16px;
  padding: 16px;
`;
