import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import { DetailsContainer } from "./style";

const DetailsAccordion = () => {
  return (
    <DetailsContainer>
      <h3>Continua com alguma dúvida?</h3>
      <h5>Talvez esses tópicos possam te ajudar.</h5>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaChevronDown style={{ color: "white" }} />}
          style={{
            background: "rgb(250, 2, 60)",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Como é feita a cobrança?
        </AccordionSummary>
        <AccordionDetails>
          Você escolhe a melhor forma de pagar e tudo ficará encargo da empreza
          parceira Paypal que ira garantir todo o auxilio que precisar.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<FaChevronDown style={{ color: "white" }} />}
          style={{
            background: "rgb(250, 2, 60)",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Posso trocar de box quando quiser?
        </AccordionSummary>
        <AccordionDetails>
          Mas é claro, poderá mudar a qualquer momento, Basta nos enviar um
          email e sua próxima box já sera do seu gosto.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<FaChevronDown style={{ color: "white" }} />}
          style={{
            background: "rgb(250, 2, 60)",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Tem cobrança de frete?
        </AccordionSummary>
        <AccordionDetails>
          Para compras acima de 400 Reais não será cobrado frete, Ah! e Filiado
          também não paga frete.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<FaChevronDown style={{ color: "white" }} />}
          style={{
            background: "rgb(250, 2, 60)",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          E se eu não gostar do que recebi?
        </AccordionSummary>
        <AccordionDetails>
          AZAR texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
        </AccordionDetails>
      </Accordion>
    </DetailsContainer>
  );
};

export default DetailsAccordion;
