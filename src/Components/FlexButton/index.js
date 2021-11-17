import { StyledButton } from "./style";

const FlexButton = ({
  width = "100%",
  font = "16px",
  colors = ["#42a5f5", "white"],
  hover = ["#019C98", "white"],
  children,
}) => {
  return (
    <StyledButton width={width} font={font} colors={colors} hover={hover}>
      {children}
    </StyledButton>
  );
};

export default FlexButton;
