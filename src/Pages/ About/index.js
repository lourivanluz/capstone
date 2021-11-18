import AboutInfo from "../../Components/AboutnInfo";
import CarouselBoxes from "../../Components/CarouselBoxes";
import { useBox } from "../../Providers/Box";
import { PageBase } from "../../Components/PageBase";
import DetailsAccordion from "../../Components/DetailsAccordion";

export const About = () => {
  const { boxList } = useBox();

  return (
    <PageBase>
      <AboutInfo />
      <CarouselBoxes products={boxList} />
      <DetailsAccordion />
    </PageBase>
  );
};
