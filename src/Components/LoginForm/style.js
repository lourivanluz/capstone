import { styled as muiStyled } from "@mui/material/styles";
import { TextField as MuiTextField } from "@mui/material";

export const TextField = muiStyled(MuiTextField)(({ theme }) => ({
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  width: "90%",
}));
