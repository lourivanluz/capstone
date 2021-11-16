import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";

const DetailsAccordion = () => {
  return (
    <div style={{ width: "600px" }}>
      <h3>Continua com alguma dúvida?</h3>
      <span>Talvez esses tópicos possam te ajudar.</span>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaChevronDown />}
          style={{ background: "lightgreen" }}
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
          expandIcon={<FaChevronDown />}
          style={{ background: "lightgreen" }}
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
          expandIcon={<FaChevronDown />}
          style={{ background: "lightgreen" }}
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
          expandIcon={<FaChevronDown />}
          style={{ background: "lightgreen" }}
        >
          E se eu não gostar do que recebi?
        </AccordionSummary>
        <AccordionDetails>
          AZAR texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default DetailsAccordion;
