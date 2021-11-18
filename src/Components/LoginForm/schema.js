import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Insira seu e-mail *"),
  password: yup.string().required("Insira sua senha *"),
});

export default schema;
