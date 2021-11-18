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
          label="Nome"
          fullWidth
          variant="standard"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          label="E-mail"
          fullWidth
          variant="standard"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Telefone"
          fullWidth
          variant="standard"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        <TextField
          label="Senha"
          fullWidth
          variant="standard"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <TextField
          label="Confirmação de senha"
          fullWidth
          variant="standard"
          type="password"
          {...register("passconf")}
          error={!!errors.passconf}
          helperText={errors.passconf?.message}
        />

        <TextField
          label="CEP"
          fullWidth
          variant="standard"
          {...register("cep")}
          error={!!errors.cep}
          helperText={errors.cep?.message}
        />

        <TextField
          label="Endereço"
          fullWidth
          variant="standard"
          {...register("address")}
          error={!!errors.address}
          helperText={errors.address?.message}
        />

        <TextField
          label="Bairro"
          fullWidth
          variant="standard"
          {...register("area")}
          error={!!errors.area}
          helperText={errors.area?.message}
        />

        <TextField
          label="Número"
          fullWidth
          variant="standard"
          {...register("number")}
          error={!!errors.number}
          helperText={errors.number?.message}
        />

        <TextField
          label="Complemento"
          fullWidth
          variant="standard"
          {...register("complement")}
          error={!!errors.complement}
          helperText={errors.complement?.message}
        />

        <FlexButton type="submit">Tudo Pronto</FlexButton>
      </FormWrapper>
    </form>
  );
};

export default SignUpForm;
