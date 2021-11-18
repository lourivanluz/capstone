import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextField } from "@mui/material";
import { FormBackground, FormContent } from "./style";
import FlexButton from "../FlexButton";

const FooterForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório *"),
    email: yup
      .string()
      .required("E-mail obrigatório *")
      .email("E-mail inválido *"),
    feedback: yup.string().required("Digite sua mensagem *"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <FormBackground onSubmit={handleSubmit(() => console.log("Enviado"))}>
      <FormContent>
        <h2>Fale Com a Gente</h2>
        <div className="flex">
          <div className="flex-left">
            <TextField
              label={errors.name ? errors.name.message : "Nome"}
              {...register("name")}
              variant="filled"
              fullWidth
            />
          </div>
          <div className="flex-right">
            <TextField
              label={errors.email ? errors.email.message : "E-mail"}
              {...register("email")}
              variant="filled"
              fullWidth
            />
          </div>
        </div>
        <TextField
          label={
            errors.feedback ? errors.feedback.message : "Deixe sua mensagem"
          }
          {...register("feedback")}
          variant="filled"
          fullWidth
          multiline
          rows={4}
        />
        <FlexButton font="18px" type="submit">
          Enviar
        </FlexButton>
      </FormContent>
    </FormBackground>
  );
};

export default FooterForm;
