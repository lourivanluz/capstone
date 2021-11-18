import styled from "styled-components";
import imgMobile from "./../../Assets/Banner/BannerMobile.png";
import imgDesk from "./../../Assets/Banner/Banner.png";

export const ImgStyled = styled.img`
  width: 100%;
  height: 19.53%;
  min-height: 100px;
  margin: 15px auto;
  border-radius: 5px;
  /*   background-image: url(${imgMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1024px; */

  src: url(imgDesk);
`;
