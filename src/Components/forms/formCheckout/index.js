import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const FormCheckout = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("email invalido"),
    name: yup.string().required("Nome obrigatório"),
    phone: yup.string().required("Telefone obrigatório"),
    cep: yup.string().required("Cep obrigatório"),
    address: yup.string().required("Endereço obrigatório"),
    area: yup.string().required("Bairro obrigatório"),
    number: yup.string().required("Número obrigatório"),
    complement: yup.string().required("Complemento obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleData = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleData)}>
      <input placeholder="Nome" type="text" {...register("name")} />
      {errors && <p>{errors.name?.message}</p>}
      <input placeholder="Email" type="email" {...register("email")} />
      {errors && <p>{errors.email?.message}</p>}
      <input placeholder="Telefone" type="number" {...register("phone")} />
      {errors && <p>{errors.phone?.message}</p>}
      <input placeholder="Cep" type="number" {...register("cep")} />
      {errors && <p>{errors.cep?.message}</p>}
      <input placeholder="Endereço" type="text" {...register("adress")} />
      {errors && <p>{errors.adress?.message}</p>}
      <input placeholder="Bairro" type="text" {...register("area")} />
      {errors && <p>{errors.area?.message}</p>}
      <input placeholder="Número" type="text" {...register("number")} />
      {errors && <p>{errors.number?.message}</p>}
      <input
        placeholder="Complemento"
        type="text"
        {...register("complement")}
      />
      {errors && <p>{errors.complement?.message}</p>}
      <button type="submit">Tudo Pronto</button>
    </form>
  );
};
