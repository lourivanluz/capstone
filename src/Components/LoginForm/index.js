import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useUser } from "../../Providers/User";

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
      <input placeholder="Email" {...register("email")} />
      <input placeholder="Senha" {...register("password")} />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
