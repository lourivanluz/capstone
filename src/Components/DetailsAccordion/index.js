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
          Por e-mail e pa texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
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
          Mas é claro texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
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
          Nope texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
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
