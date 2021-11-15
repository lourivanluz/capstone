import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCart } from "../../Providers/Cart";

import api from "../../Services";

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
    <div>
      <img src={box.img} alt={box.title} style={{ width: "420px" }} />
      <div>
        <h1>{box.title}</h1>
        <p>{box.price}</p>
        <button onClick={() => addToCart(box)}>Adicionar</button>
      </div>
      <div>
        <h2> {box.weight} </h2>
        <span>Em ingredientes</span>
        <p> {box.description} </p>
      </div>
      <div>
        <h2>Contém:</h2>
        {box.contents &&
          box.contents.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </div>
  );
};

export default BoxDetails;
