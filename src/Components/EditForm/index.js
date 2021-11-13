import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUser } from "../../Providers/User";

const EditForm = () => {
  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("E-mail inválido *"),
    phone: yup.string(),
    cep: yup.string(),
    address: yup.string(),
    area: yup.string(),
    number: yup.string(),
    complement: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { editAccount } = useUser();

  return (
    <form
      onSubmit={handleSubmit(editAccount)}
      style={{ display: "flex", flexDirection: "column", width: "300px" }}
    >
      {!!errors.name && <span>{errors.name.message}</span>}
      <input placeholder="Nome" {...register("name")} />

      {!!errors.email && <span>{errors.email.message}</span>}
      <input placeholder="E-mail" {...register("email")} />

      {!!errors.phone && <span>{errors.phone.message}</span>}
      <input placeholder="Telefone" {...register("phone")} />

      {!!errors.cep && <span>{errors.cep.message}</span>}
      <input placeholder="CEP" {...register("cep")} />

      {!!errors.address && <span>{errors.address.message}</span>}
      <input placeholder="Endereço" {...register("address")} />

      {!!errors.area && <span>{errors.area.message}</span>}
      <input placeholder="Bairro" {...register("area")} />

      {!!errors.number && <span>{errors.number.message}</span>}
      <input placeholder="Número" {...register("number")} />

      <input placeholder="Complemento" {...register("complement")} />

      <button type="submit">Salvar alterações</button>
    </form>
  );
};

export default EditForm;
