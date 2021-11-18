import { ImgStyled, BannerContainer } from "./style";
import banner from "./../../Assets/Banner/Banner.png";
import bannerMobile from "./../../Assets/Banner/BannerMobile.png";

export const Banner = () => {
  const isMobile = window.screen.width < 620;

  return (
    <div>
      <ImgStyled src={isMobile ? bannerMobile : banner} />
    </div>
  );
};
