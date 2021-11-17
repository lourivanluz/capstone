import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: ${(props) => props.font};
  width: ${(props) => props.width};
  font-weight: bold;
  padding: 0.5em;
  background-color: ${(props) => props.colors[0]};
  color: ${(props) => props.colors[1]};
  border: none;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.hover[0]};
    color: ${(props) => props.hover[1]};
  }

  &:active {
    background-color: ${(props) => props.colors[0]};
    color: ${(props) => props.colors[1]};
  }
`;
