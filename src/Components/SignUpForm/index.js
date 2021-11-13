import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUser } from "../../Providers/User";

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
    <form
      onSubmit={handleSubmit(createAccount)}
      style={{ display: "flex", flexDirection: "column", width: "300px" }}
    >
      {!!errors.name && <span>{errors.name.message}</span>}
      <input placeholder="Nome" {...register("name")} />

      {!!errors.email && <span>{errors.email.message}</span>}
      <input placeholder="E-mail" {...register("email")} />

      {!!errors.phone && <span>{errors.phone.message}</span>}
      <input placeholder="Telefone" {...register("phone")} />

      {!!errors.password && <span>{errors.password.message}</span>}
      <input type="password" placeholder="Senha" {...register("password")} />

      {!!errors.passconf && <span>{errors.passconf.message}</span>}
      <input
        type="password"
        placeholder="Confirmação de senha"
        {...register("passconf")}
      />

      {!!errors.cep && <span>{errors.cep.message}</span>}
      <input placeholder="CEP" {...register("cep")} />

      {!!errors.address && <span>{errors.address.message}</span>}
      <input placeholder="Endereço" {...register("address")} />

      {!!errors.area && <span>{errors.area.message}</span>}
      <input placeholder="Bairro" {...register("area")} />

      {!!errors.number && <span>{errors.number.message}</span>}
      <input placeholder="Número" {...register("number")} />

      <input placeholder="Complemento" {...register("complement")} />

      <button type="submit">Tudo Pronto</button>
    </form>
  );
};

export default SignUpForm;
