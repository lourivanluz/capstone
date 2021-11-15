import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import { useCart } from "../../Providers/Cart";
import { getProductDetails } from "../../Services";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    getProductDetails(id)
      .then((response) => {
        setProduct(response.data);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <div>
        <img src={product.img} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <button onClick={() => addToCart(product)}>Adicionar</button>
      </div>
      <div>
        <h2> {product.weight} </h2>
        <span>Peso total do alimento</span>
        <p> {product.description} </p>
        <h2>Ingredientes:</h2>
        <p> {product.ingredient} </p>
      </div>
      <div>
        <p>Porção de 180g Total</p>
        <ul>
          {!product.valueNutri ? null : (
            <>
              <li>
                {" "}
                Valor Energético: {product.valueNutri.valor_energetico[0]}{" "}
              </li>
              <li> Carboidratos: {product.valueNutri.carboidratos[0]} </li>
              <li> Proteínas: {product.valueNutri.proteinas[0]} </li>
              <li>
                {" "}
                Gorduras Totais: {product.valueNutri.gorduras_totais[0]}{" "}
              </li>
              <li>
                {" "}
                Gorduras Saturadas: {
                  product.valueNutri.gorduras_saturada[0]
                }{" "}
              </li>
              <li> Gorduras Trans: {product.valueNutri.gorduras_trans[0]} </li>
              <li>
                {" "}
                Fibra Alimentar: {product.valueNutri.fibra_alimentar[0]}{" "}
              </li>
              <li> Sódio: {product.valueNutri.sodio[0]} </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
