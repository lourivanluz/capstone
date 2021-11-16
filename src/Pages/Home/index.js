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
      <div style={{ backgroundColor: "red" }}>
        <h1>Carnes:</h1>
        <CarouselProducts products={meatList} />
      </div>
      <div style={{ backgroundColor: "red" }}>
        <h1>Boxes:</h1>
        <CarouselBoxes products={boxList} />
      </div>
      <div style={{ backgroundColor: "red" }}>
        <h1>Frangos:</h1>
        <CarouselProducts products={chickenList} />
      </div>
      <div style={{ backgroundColor: "red" }}>
        <h1>Vegetarianos:</h1>
        <CarouselProducts products={vegList} />
      </div>
      <div style={{ backgroundColor: "red" }}>
        <h1>Peixes e frutos do mar:</h1>
        <CarouselProducts products={fishList} />
      </div>
      <div style={{ backgroundColor: "red" }}>
        <h1>Snacks:</h1>
        <CarouselProducts products={snacksList} />
      </div>
      <div style={{ backgroundColor: "red" }}>
        <h1>Pães:</h1>
        <CarouselProducts products={breadsList} />
      </div>
      <div style={{ backgroundColor: "red" }}>
        <h1>Sopas e cremes:</h1>
        <CarouselProducts products={soupsList} />
      </div>
    </PageBase>
  );
};
