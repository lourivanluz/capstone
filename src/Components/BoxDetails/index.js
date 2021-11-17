import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCart } from "../../Providers/Cart";

import api from "../../Services";
import FlexButton from "../FlexButton";
import { ProductWrapper } from "./style";

const BoxDetails = () => {
  const [box, setBox] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    api
      .get(`/boxes/${id}`)
      .then((response) => {
        setBox(response.data);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <ProductWrapper>
      <img src={box.img} alt={box.title} />
      <div>
        <h1>{box.title}</h1>
        <h3>{box.price} /mês</h3>
        <FlexButton width="65%" onClick={() => addToCart(box)}>
          Adicionar
        </FlexButton>
      </div>
      <div>
        <h2> {box.weight} </h2>
        <h4>Em ingredientes</h4>
        <p> {box.description} </p>
      </div>
      <div>
        <h2>Contém:</h2>
        {box.contents &&
          box.contents.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </ProductWrapper>
  );
};

export default BoxDetails;
