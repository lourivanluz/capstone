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
          label={errors.name ? errors.name.message : user.name}
          fullWidth
          variant="standard"
          {...register("name")}
        />

        <TextField
          label={errors.email ? errors.email.message : user.email}
          fullWidth
          variant="standard"
          {...register("email")}
        />

        <TextField
          label={errors.phone ? errors.phone.message : user.phone}
          fullWidth
          variant="standard"
          {...register("phone")}
        />

        <TextField
          label={errors.cep ? errors.cep.message : user.cep}
          fullWidth
          variant="standard"
          {...register("cep")}
        />

        <TextField
          label={errors.address ? errors.address.message : user.address}
          fullWidth
          variant="standard"
          {...register("address")}
        />

        <TextField
          label={errors.area ? errors.area.message : user.area}
          fullWidth
          variant="standard"
          {...register("area")}
        />

        <TextField
          label={errors.number ? errors.number.message : user.number}
          fullWidth
          variant="standard"
          {...register("number")}
        />

        <TextField
          label={
            errors.complement ? errors.complement.message : user.complement
          }
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
