import { Form, Formik } from "formik"
import * as Yup from "yup"
import AccountQuestion from "./AccountQuestion"
import FormGroupInput from "./FormGroupInput"
import { useSignUpForm } from "./useSignUpForm"

export default function SignUnForm() {
  const { handleSubmit } = useSignUpForm()

  return (
    <section className="w-full max-w-[500px] px-[20px] box-border">
      <div>
        <header className="mb-[50px]">
          <h1 className="text-[24px]">Register your account</h1>
        </header>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must contain 15 characters or less")
              .matches(/^[a-zA-Z]+$/, "Must contain only letters")
              .required("Required"),
            lastName: Yup.string()
              .max(15, "Must contain 15 characters or less")
              .matches(/^[a-zA-Z]+$/, "Must contain only letters")
              .required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            password: Yup.string()
              .max(20, "Must contain 20 characters or less")
              .min(6, "Must contain 6 characters or more")
              .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,20}$/,
                "Must contain at least one uppercase letter, one lowercase letter and one number"
              )
              .required("Required")
          })}
          onSubmit={values => handleSubmit(values)}
        >
          <Form className="flex flex-col justify-start items-center gap-4">
            <FormGroupInput
              type="firstName"
              label="First Name"
              placeholder="Juan"
              required={true}
            />
            <FormGroupInput type="lastName" label="Last Name" placeholder="Perez" required={true} />
            <FormGroupInput
              type="email"
              label="Email"
              placeholder="example@gmail.com"
              required={true}
            />
            <FormGroupInput
              type="password"
              label="Password"
              placeholder="example196"
              minLength={4}
              maxLength={15}
              required={true}
            />
            <input className="cursor-pointer" type="submit" value="Sign in" />
            <AccountQuestion question="¿Are you already registered?" href="" hrefText="Log in" />
          </Form>
        </Formik>
      </div>
    </section>
  )
}
