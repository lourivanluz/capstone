import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import { useCart } from "../../Providers/Cart";
import { getProductDetails } from "../../Services";
import { ProductWrapper } from "../BoxDetails/style";
import FlexButton from "../FlexButton";

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
    <ProductWrapper>
      <img src={product.img} alt={product.title} />
      <div>
        <h1>{product.title}</h1>
        <h3>{product.price}</h3>
        <FlexButton width="65%" onClick={() => addToCart(product)}>
          Adicionar
        </FlexButton>
      </div>
      <div>
        <h2> {product.weight} </h2>
        <h4>Peso total do alimento</h4>
        <p> {product.description} </p>
        <h4>Ingredientes:</h4>
        <p> {product.ingredient} </p>
      </div>
      <div>
        <h5>Porção de {product.weight}</h5>
        <ul>
          {!product.valueNutri ? null : (
            <>
              <li className="dark">
                Valor Energético: {product.valueNutri.valor_energetico[0]}
              </li>
              <li> Carboidratos: {product.valueNutri.carboidratos[0]} </li>
              <li className="dark">
                Proteínas: {product.valueNutri.proteinas[0]}
              </li>
              <li> Gorduras Totais: {product.valueNutri.gorduras_totais[0]}</li>
              <li className="dark">
                Gorduras Saturadas: {product.valueNutri.gorduras_saturada[0]}
              </li>
              <li> Gorduras Trans: {product.valueNutri.gorduras_trans[0]} </li>
              <li className="dark">
                Fibra Alimentar: {product.valueNutri.fibra_alimentar[0]}
              </li>
              <li> Sódio: {product.valueNutri.sodio[0]} </li>
            </>
          )}
        </ul>
      </div>
    </ProductWrapper>
  );
};

export default ProductDetails;
