import { ImgStyled } from "./style";

export const Banner = ({ img }) => {
  return (
    <div>
      <ImgStyled src={img} alt={"imagem "} />
    </div>
  );
};
