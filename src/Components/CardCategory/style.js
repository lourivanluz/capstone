import styled from "styled-components";

export const CardCategoryContainer = styled.li`
  width: 200px;
  min-width: 200px;
  height: 300px;
  border: 1px solid #000;
  transition: transform 0.75s;
  background-image: url(${(props) => props.imageBackground});
  background-size: 200px 300px;
  :hover {
    transform: translate(-1px, -1px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const CardCategoryContent = styled.div`
  width: 200px;
  min-width: 200px;
  height: 300px;
  background-color: rgba(253, 245, 230, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-weight: bold;
    font-variant: small-caps;
    color: #000000;
  }
`;
