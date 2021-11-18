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

  const { user, editAccount } = useUser();

  return (
    <form onSubmit={handleSubmit(editAccount)}>
      <FormWrapper>
        <h1>Editar Conta</h1>

        <TextField
          placeholder={user.name}
          fullWidth
          variant="standard"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          placeholder={user.email}
          fullWidth
          variant="standard"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          placeholder={user.phone}
          fullWidth
          variant="standard"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        <TextField
          placeholder={user.cep}
          fullWidth
          variant="standard"
          {...register("cep")}
          error={!!errors.cep}
          helperText={errors.cep?.message}
        />

        <TextField
          placeholder={user.address}
          fullWidth
          variant="standard"
          {...register("address")}
          error={!!errors.address}
          helperText={errors.address?.message}
        />

        <TextField
          placeholder={user.area}
          fullWidth
          variant="standard"
          {...register("area")}
          error={!!errors.area}
          helperText={errors.area?.message}
        />

        <TextField
          placeholder={user.number}
          fullWidth
          variant="standard"
          {...register("number")}
          error={!!errors.number}
          helperText={errors.number?.message}
        />

        <TextField
          placeholder={user.complement}
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

export default EditForm;
