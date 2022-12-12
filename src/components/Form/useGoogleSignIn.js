import { provider } from "../../../firebase/authGoogleProvider";
import { getAuth, signInWithPopup } from "firebase/auth";
import { createUser } from "../../api/account";
import { useNavigate } from "react-router-dom";

export const useGoogleSignIn = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  const signInWithGoogle = () =>
    signInWithPopup(auth, provider).then((data) => {
      const first_name = data._tokenResponse.firstName;
      const last_name = data._tokenResponse.lastName;
      const email = data._tokenResponse.email;
      const password = data.user.uid;

      const user = {
        first_name,
        last_name,
        email,
        password,
      };

      createUser(user)
        .then(async (response) => {
          navigate("/login");
        })
        .catch((error) => console.log(error));
    });

  return { signInWithGoogle };
};
