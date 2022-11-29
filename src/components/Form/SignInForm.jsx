import { Form, Formik } from "formik"
import AccountQuestion from "./AccountQuestion"
import FormGroupInput from "./FormGroupInput"

export default function SignInForm() {
  return (
    <section>
      <div>
        <header>
          <h1>Create Account</h1>
        </header>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: ""
          }}
        >
          <Form className="form">
            <FormGroupInput
              type="username"
              label="Username"
              placeholder="example"
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
              placeholder="example196"
              minLength={4}
              maxLength={15}
              required={true}
            />
            <input type="submit" value="Sign in" />
            <AccountQuestion question="¿Are you already registered?" href="" hrefText="Log in" />
          </Form>
        </Formik>
      </div>
    </section>
  )
}
