import { IoIosArrowForward } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { CartContainer } from "./style";
import { useCart } from "../../Providers/Cart";

export const Cart = ({ show }) => {
  const { handleShowCart } = useCart();

  const cartList = [
    {
      id: 1,
      img: "https://livup.imgix.net/website/images/photos-medium/bolinha-de-abobora-e-carne-com-chia.jpg?auto=format",
      title: "Bolinha de abóbora e carne com chia",
      weight: "100g",
      price: "R$ 8,90",
      tags: ["contém lactose"],
      description:
        "Uma ótima opção de snack para o meio da manhã ou da tarde, as bolinhas de abóbora e carne com chia vão matar a sua fome e te dar energia até a próxima refeição.\nTambém podem ser uma boa pedida para incrementar um prato, já que o crocante da chia e o sabor do parmesão trazem um toque todo especial à essas bolinhas tão saborosas!.",
      ingredient:
        "abóbora japonesa orgânica, carne bovina, cebola orgânica, chia, queijo parmesão, farinha de coco, azeite extra virgem, páprica doce, sal, pimenta do reino.",
      valueNutri: {
        valor_energetico: ["184.00 kcal", "10 %"],
        carboidratos: ["11.00 g", "4 %"],
        proteinas: ["16.00 g", "22 %"],
        gorduras_totais: ["8.20 g", "15 %"],
        gorduras_saturada: ["2.80 g", "13 %"],
        gorduras_trans: ["0.00 g", "** %"],
        fibra_alimentar: ["5.50 g", "22 %"],
        sodio: ["165.00 mg", "7 %"],
      },
      category: "carnes vermelhas",
    },
    {
      id: 2,
      img: "https://livup.imgix.net/website/images/photos-medium/carne-louca-150g-1606737866761.jpg?auto=format",
      title: "Carne Louca",
      weight: "150g",
      price: "R$ 16,90",
      tags: [],
      description:
        "Assim que colocar essa porção no prato, você vai sentir cheiro de 'me dei bem'. E vai ter certeza disso quando ver que tem muita carne louca no pedaço - é uma mega porção! Mas a carne não vem sozinha: muito macia e bem preparada, ela chega acompanhada de temperos naturais, inclusive orgânicos, que dão um sabor super intenso a cada mordida.\nExperimente com batata rústica, purê ou da forma mais clássica: como o recheio de um belo sanduichão.",
      ingredient:
        "carne bovina, cebola orgânica, extrato de tomate, cenoura, alho-poró orgânico, pimentão verde orgânico, azeite extra virgem, pimentão amarelo orgânico, salsinha orgânica, alho, sal.",
      valueNutri: {
        valor_energetico: ["182.00 kcal", "10 %"],
        carboidratos: ["6.30 g", "3 %"],
        proteinas: ["22.00 g", "30 %"],
        gorduras_totais: ["7.70 g", "14 %"],
        gorduras_saturada: ["2.80 g", "13 %"],
        gorduras_trans: ["0.00 g", "** %"],
        fibra_alimentar: ["1.50 g", "6 %"],
        sodio: ["555.00 mg", "24 %"],
      },
      category: "carnes vermelhas",
    },
    {
      id: 3,
      img: "https://livup.imgix.net/website/images/photos-medium/carne-moida-com-cenoura-e-vagem-110g.jpg?auto=format",
      title: "Carne Moída com Cenoura e Vagem",
      weight: "110g",
      price: "R$ 14,50",
      tags: [],
      description:
        "Quer prato mais caseiro, com gostinho de comida de casa, daqueles feitas pela mamãe do que carne moída com cenoura e vagem? Usamos patinho moído, que é uma carne de primeira, ideal para fazer carne moída refogadinha.\nÉ bem macia e tem pouca gordura, mas é bem saborosa e molhadinha.\nEsta clássica comida caseira é uma opção saborosa e muito nutritiva. Fica ótima com batatinhas, arroz, feijão, algo assim, com gostinho de casa.",
      ingredient:
        "carne bovina, cenoura, cebola orgânica, vagem, azeite extra virgem, alho, sal, pimenta-do-reino.",
      valueNutri: {
        valor_energetico: ["143.00 kcal", "8 %"],
        carboidratos: ["3.40 g", "2 %"],
        proteinas: ["18.00 g", "24 %"],
        gorduras_totais: ["6.20 g", "12 %"],
        gorduras_saturada: ["2.10 g", "10 %"],
        gorduras_trans: ["0.00 g", "** %"],
        fibra_alimentar: ["1.10 g", "5 %"],
        sodio: ["269.00 mg", "12 %"],
      },
      category: "carnes vermelhas",
    },
    {
      id: 3,
      img: "https://livup.imgix.net/website/images/photos-medium/carne-moida-com-cenoura-e-vagem-110g.jpg?auto=format",
      title: "Carne Moída com Cenoura e Vagem",
      weight: "110g",
      price: "R$ 14,50",
      tags: [],
      description:
        "Quer prato mais caseiro, com gostinho de comida de casa, daqueles feitas pela mamãe do que carne moída com cenoura e vagem? Usamos patinho moído, que é uma carne de primeira, ideal para fazer carne moída refogadinha.\nÉ bem macia e tem pouca gordura, mas é bem saborosa e molhadinha.\nEsta clássica comida caseira é uma opção saborosa e muito nutritiva. Fica ótima com batatinhas, arroz, feijão, algo assim, com gostinho de casa.",
      ingredient:
        "carne bovina, cenoura, cebola orgânica, vagem, azeite extra virgem, alho, sal, pimenta-do-reino.",
      valueNutri: {
        valor_energetico: ["143.00 kcal", "8 %"],
        carboidratos: ["3.40 g", "2 %"],
        proteinas: ["18.00 g", "24 %"],
        gorduras_totais: ["6.20 g", "12 %"],
        gorduras_saturada: ["2.10 g", "10 %"],
        gorduras_trans: ["0.00 g", "** %"],
        fibra_alimentar: ["1.10 g", "5 %"],
        sodio: ["269.00 mg", "12 %"],
      },
      category: "carnes vermelhas",
    },
  ];

  const cartFiltred = cartList.filter((item, index, array) => {
    return array.map((item) => item.id).indexOf(item.id) === index;
  });

  return (
    <CartContainer show={show}>
      <div onClick={handleShowCart}>
        <IoIosArrowForward /> Minha Sacola
      </div>
      {cartList.length === 0 ? (
        <div className="bagEmpty">
          <RiShoppingBag2Fill />
          <span>Clique em “adicionar” para adicionar produtos na sacola</span>
        </div>
      ) : (
        <div>
          <ul></ul>
          <span>previsão de entrega: 21/11</span>
          <span>subTotal</span>
          <button>Finalizar compra</button>
        </div>
      )}
    </CartContainer>
  );
};
