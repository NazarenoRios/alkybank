import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useSignUpForm } from "./useSignUpForm";
import AccountQuestion from "./AccountQuestion";
import FormGroupInput from "./FormGroupInput";
import Button from "../Button";
import googleIcon from "../../assets/google-icon.svg";
import { useGoogleSignIn } from "./useGoogleSignIn";

export default function SignUnForm() {
  const { handleSubmit } = useSignUpForm();
  const { signInWithGoogle } = useGoogleSignIn();

  return (
    <section className="w-full max-w-[404px] bg-red px-[20px] box-border">
      <div>
        <header className="mb-[50px]">
          <h1 className="text-text1 text-[30px] font-semibold leading-[37px] sm:text-left text-center">
            Create new account
          </h1>
          <h2 className="text-text2 text-[16px] font-normal leading-[30px] sm:text-left text-center">
            Welcome back! Please enter your details
          </h2>
        </header>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            fullName: Yup.string()
              .max(20, "Must contain 20 characters or less")
              .matches(/^(?![\s.]+$)[a-zA-Z\s.]*$/, "Must contain only letters")
              .required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            password: Yup.string()
              .max(20, "Must contain 20 characters or less")
              .min(6, "Must contain 6 characters or more")
              .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,20}$/,
                "Must contain at least one uppercase letter, one lowercase letter and one number"
              )
              .required("Required"),
          })}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form className="flex flex-col justify-start items-center gap-4">
            <FormGroupInput
              type="fullName"
              label="Full Name"
              placeholder="Juan Perez"
              required={true}
            />
            <FormGroupInput
              type="email"
              label="Email"
              placeholder="example@gmail.com"
              required={true}
            />
            <FormGroupInput
              type="password"
              label="Password"
              placeholder="***********"
              minLength={4}
              maxLength={15}
              required={true}
            />
            <Button
              className="max-w-[500px]"
              variant="primary"
              text="Create Account"
              type="submit"
            />
            <button
              className="flex gap-3 justify-center items-center w-full h-[50px] rounded-[10px] border-solid border-[1px] border-[#F5F5F5]"
              onClick={() => {
                signInWithGoogle();
              }}
              type="button"
            >
              <img
                className="w-[24px] h-[24px]"
                src={googleIcon}
                alt="Ícono de Google"
              />
              <span className="font-semibold text-text2">
                Sign up with Google
              </span>
            </button>
            <AccountQuestion
              question="¿Already have an account?"
              href="/login"
              hrefText="Sign in"
            />
          </Form>
        </Formik>
      </div>
    </section>
  );
}
