import SignUpForm from "../../Components/SignUpForm";
import EditForm from "../../Components/EditForm";
import { useUser } from "../../Providers/User";

export const Register = () => {
  const { accessToken } = useUser();

  return <>{!!accessToken ? <EditForm /> : <SignUpForm />}</>;
};
