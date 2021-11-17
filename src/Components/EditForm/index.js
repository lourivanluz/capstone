import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUser } from "../../Providers/User";
import { FormWrapper } from "../SignUpForm/style";
import { TextField } from "@mui/material";
import FlexButton from "../FlexButton";

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
    <form onSubmit={handleSubmit(editAccount)}>
      <FormWrapper>
        <h1>Editar Conta</h1>

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

export default EditForm;
