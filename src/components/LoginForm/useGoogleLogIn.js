import { provider } from "../../../firebase/authGoogleProvider";
import { getAuth, signInWithPopup } from "firebase/auth";
import { logUser } from "../../api/account";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const useGoogleLogIn = () => {
  const { signin } = useAuth();
  const auth = getAuth();

  const navigate = useNavigate();

  const logInWithGoogle = () =>
    signInWithPopup(auth, provider).then((data) => {
      const email = data._tokenResponse.email;
      const password = data.user.uid;

      const user = {
        email,
        password,
      };

      signin(email,password)
        .then(async (response) => {
          navigate("/");
        })
        .catch((error) => console.log(error));
    });

  return { logInWithGoogle };
};
