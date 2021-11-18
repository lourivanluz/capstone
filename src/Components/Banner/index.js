import { ImgStyled } from "./style";
import banner from "./../../Assets/Banner/Banner.png";
import bannerMobile from "./../../Assets/Banner/BannerMobile.png";
import { useHistory } from "react-router";

export const Banner = () => {
  const isMobile = window.screen.width < 620;
  const history = useHistory();

  return (
    <div onClick={() => history.push("/about")}>
      <ImgStyled src={isMobile ? bannerMobile : banner} />
    </div>
  );
};
