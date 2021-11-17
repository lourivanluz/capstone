import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { TextField as MuiTextField } from "@mui/material";

export const SearchContainer = styled.div`
  position: absolute;
  width: 98%;
  max-width: 1044px;
  height: 92vh;
  background-color: #fff;
  border: 1px solid var(--color-primary);
  top: 50px;
  left: 0;
  overflow-y: auto;
  scrollbar-color: var(--color-secondary) var(--fontColor-primary);
  scrollbar-width: thin;
  @media (min-width: 790px) {
    width: 100%;
  }
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
  .inputsContainer {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid grey;

    button {
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border: none;
      font-size: 25px;
      color: var(--fontColor-primary);
      :hover {
        color: var(--color-secondary);
      }
    }
    .closeSearch {
      position: absolute;
      right: 15px;
    }
  }
`;

export const TextField = muiStyled(MuiTextField)(({ theme }) => ({
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  maxWidth: "400px",
  width: "90%",
}));
