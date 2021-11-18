import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useUser } from "../../Providers/User";
import { TextField } from "./style";
import FlexButton from "../FlexButton";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { loginAccount } = useUser();

  const handleLogin = (data) => {
    loginAccount(data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <TextField
        variant="standard"
        size="small"
        margin="dense"
        placeholder="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email")}
      />
      <TextField
        variant="standard"
        size="small"
        margin="dense"
        placeholder="Senha"
        error={!!errors.password}
        helperText={errors.password?.message}
        type="password"
        {...register("password")}
      />
      <FlexButton width="90%" type="submit">
        Entrar
      </FlexButton>
    </form>
  );
};

export default LoginForm;
