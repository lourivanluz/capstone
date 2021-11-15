const AboutInfo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
      }}
    >
      <h1 style={{ width: "100%", margin: "24px", textAlign: "center" }}>
        Como Funciona?
      </h1>
      <div style={{ maxWidth: "300px", margin: "16px" }}>
        <h3 style={{ textAlign: "center", margin: "8px" }}>
          Produtos familiares
        </h3>
        <p style={{ textAlign: "center" }}>
          Nós vamos até o campo e criamos parcerias com agricultores familiares
          e orgânicos
        </p>
      </div>
      <div style={{ maxWidth: "300px", margin: "16px" }}>
        <h3 style={{ textAlign: "center", margin: "8px" }}>Você escolhe</h3>
        <p style={{ textAlign: "center" }}>
          São 5 opções diferentes para atender seus gostos e necessidades, com 2
          receitas diferentes todo mês
        </p>
      </div>
      <div style={{ maxWidth: "300px", margin: "16px" }}>
        <h3 style={{ textAlign: "center", margin: "8px" }}>
          Sempre uma surpresa
        </h3>
        <p style={{ textAlign: "center" }}>
          Nossos chefs garantem pratos deliciosos e interessantes e você ainda
          ganha um brinde em cada box
        </p>
      </div>
      <div style={{ maxWidth: "300px", margin: "16px" }}>
        <h3 style={{ textAlign: "center", margin: "8px" }}>Sem compromisso</h3>
        <p style={{ textAlign: "center" }}>
          Você receberá um e-mail confirmando seu pedido e poderá cancelar a
          qualquer momento, sem estresse
        </p>
      </div>
      <div style={{ maxWidth: "300px", margin: "16px" }}>
        <h3 style={{ textAlign: "center", margin: "8px" }}>Vamos até você</h3>
        <p style={{ textAlign: "center" }}>
          Todo mês, você recebe uma box no conforto da sua casa e aprende a
          preparar algo novo e com gostinho de impacto positivo
        </p>
      </div>
    </div>
  );
};

export default AboutInfo;
