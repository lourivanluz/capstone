import { BoxCardContainer } from "./style";

const CardBox = ({ product }) => {
  return (
    <BoxCardContainer>
      <img src={product.img} alt={product.title} />

      <div>
        <p>{product.title}</p>
        <span>{product.price}</span>
      </div>
      <span className="weight">{product.weight}</span>
      <div>
        <div className="content">
          <span className="plus">+ {product.contents[2]}</span>
          <span>Disponível no dia 30/11</span>
        </div>
        <button>Adicionar</button>
      </div>
    </BoxCardContainer>
  );
};

export default CardBox;
