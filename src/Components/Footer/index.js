import FooterForm from "../FooterForm";
import { AboutContent, Container } from "./style";
import { FaGithub } from "react-icons/fa";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <>
      <FooterForm />
      <Container>
        <AboutContent>
          <div>
            <h3>Sobre</h3>
            <p>
              Esse site é um projeto de estudos de alunos da Kenzie Academy
              Brasil com o objetivo de colocar nossos conhecimentos técnicos e
              habilidades de comunicação em prática.
            </p>
          </div>
          <div>
            <h3>Integrantes</h3>
            <ul>
              <li>
                Arthur Sarmento{" "}
                <Link href="https://github.com/arthurbs17">
                  <FaGithub />
                </Link>
              </li>
              <li>
                Gabriel Azevedo{" "}
                <Link href="https://github.com/azgabe">
                  <FaGithub />
                </Link>
              </li>
              <li>
                Lourivan Rodrigues{" "}
                <Link href="https://github.com/lourivanluz">
                  <FaGithub />
                </Link>
              </li>
            </ul>
          </div>
        </AboutContent>
      </Container>
    </>
  );
};

export default Footer;
