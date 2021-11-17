import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUser } from "../../Providers/User";
import FlexButton from "../FlexButton";
import { FormWrapper } from "./style";
import { TextField } from "@mui/material";

const SignUpForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório *"),
    email: yup
      .string()
      .required("E-mail obrigatório *")
      .email("E-mail inválido *"),
    phone: yup.string().required("Telefone obrigatório *"),
    password: yup
      .string()
      .required("Senha obrigatória *")
      .min(8, "Mínimo de 8 dígitos *"),
    passconf: yup
      .string()
      .required("Confirmação obrigatória *")
      .oneOf([yup.ref("password")], "As senhas não correspondem *"),
    cep: yup.string().required("CEP obrigatório *"),
    address: yup.string().required("Endereço obrigatório *"),
    area: yup.string().required("Bairro obrigatório *"),
    number: yup.string().required("Número obrigatório *"),
    complement: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { createAccount } = useUser();

  return (
    <form onSubmit={handleSubmit(createAccount)}>
      <FormWrapper>
        <h1>Criar Conta</h1>

        <TextField
          label={errors.name ? errors.name.message : "Nome"}
          fullWidth
          variant="standard"
          {...register("name")}
        />

        <TextField
          label={errors.email ? errors.email.message : "E-mail"}
          fullWidth
          variant="standard"
          {...register("email")}
        />

        <TextField
          label={errors.phone ? errors.phone.message : "Telefone"}
          fullWidth
          variant="standard"
          {...register("phone")}
        />

        <TextField
          label={errors.password ? errors.password.message : "Senha"}
          fullWidth
          variant="standard"
          type="password"
          {...register("password")}
        />

        <TextField
          label={
            errors.passconf ? errors.passconf.message : "Confirmação de senha"
          }
          fullWidth
          variant="standard"
          type="password"
          {...register("passconf")}
        />

        <TextField
          label={errors.cep ? errors.cep.message : "CEP"}
          fullWidth
          variant="standard"
          {...register("cep")}
        />

        <TextField
          label={errors.address ? errors.address.message : "Endereço"}
          fullWidth
          variant="standard"
          {...register("address")}
        />

        <TextField
          label={errors.area ? errors.area.message : "Bairro"}
          fullWidth
          variant="standard"
          {...register("area")}
        />

        <TextField
          label={errors.number ? errors.number.message : "Número"}
          fullWidth
          variant="standard"
          {...register("number")}
        />

        <TextField
          label={errors.complement ? errors.complement.message : "Complemento"}
          fullWidth
          variant="standard"
          {...register("complement")}
        />

        <FlexButton type="submit">Tudo Pronto</FlexButton>
      </FormWrapper>
    </form>
  );
};

export default SignUpForm;
