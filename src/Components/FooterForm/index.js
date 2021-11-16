import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextField } from "@mui/material";

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
    <form
      onSubmit={handleSubmit(() => console.log("Enviado"))}
      style={{ display: "flex", flexDirection: "column", width: "420px" }}
    >
      <div style={{ display: "flex" }}>
        <TextField
          label={errors.name ? errors.name.message : "Nome"}
          {...register("name")}
          variant="outlined"
          color="success"
          size="small"
        />
        <TextField
          label={errors.email ? errors.email.message : "E-mail"}
          {...register("email")}
          variant="outlined"
          color="success"
          size="small"
        />
      </div>
      <TextField
        style={{ margin: "8px 0" }}
        label={errors.feedback ? errors.feedback.message : "Deixe sua mensagem"}
        {...register("feedback")}
        variant="outlined"
        color="success"
        size="small"
        multiline
        rows={4}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FooterForm;
