import { Form, Formik } from "formik"

export default function SignInForm() {
  return (
    <section>
      <div>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: ""
          }}
        >
          <Form className="form">
            <input type="submit" value="Registrar cuenta" />
          </Form>
        </Formik>
      </div>
    </section>
  )
}
