import { Banner } from "../../Components/Banner";
import CarouselBoxes from "../../Components/CarouselBoxes";
import CarouselProducts from "../../Components/CarouselProducts";
import { PageBase } from "../../Components/PageBase";
import { useBox } from "../../Providers/Box";
import { useProducts } from "../../Providers/Products";

export const Home = () => {
  const { products } = useProducts();
  const { boxList } = useBox();
  const meatList = products.filter(
    (item) => item.category === "carnes vermelhas"
  );
  const chickenList = products.filter((item) => item.category === "frangos");
  const vegList = products.filter((item) => item.category === "vegetarianos");
  const fishList = products.filter(
    (item) => item.category === "peixes e frutos do mar"
  );
  const snacksList = products.filter((item) => item.category === "snacks");
  const breadsList = products.filter((item) => item.category === "pães");
  const soupsList = products.filter(
    (item) => item.category === "sopas e cremes"
  );

  return (
    <PageBase>
      <Banner />
      <div>
        <CarouselProducts products={meatList} />
      </div>
      <div>
        <CarouselBoxes products={boxList} />
      </div>
      <div>
        <CarouselProducts products={chickenList} />
      </div>
      <div>
        <CarouselProducts products={vegList} />
      </div>
      <div>
        <CarouselProducts products={fishList} />
      </div>
      <div>
        <CarouselProducts products={snacksList} />
      </div>
      <div>
        <CarouselProducts products={breadsList} />
      </div>
      <div>
        <CarouselProducts products={soupsList} />
      </div>
    </PageBase>
  );
};
