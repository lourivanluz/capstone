import styled from "styled-components";

export const CardCategoryContainer = styled.li`
  width: 150px;
  min-width: 150px;
  height: 210px;
  border: 1px solid #eee9e9;
  border-radius: 5px;
  transition: transform 0.75s;
  background-image: url(${(props) => props.imageBackground});
  background-size: 149px 209px;
  :hover {
    transform: translate(-1px, -1px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const CardCategoryContent = styled.div`
  width: 149px;
  min-width: 149px;
  height: 209px;
  background-color: rgba(253, 245, 230, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-weight: bold;
    font-variant: small-caps;
    text-align: center;
    font-size: 20px;
    color: #5f9ea0;
    text-shadow: -0.5px -0.5px 0px #fff, -0.5px 1px 0px #fff,
      1px -0.5px 0px #fff, 1px 0px 0px #fff;
  }
`;
