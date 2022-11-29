import { ErrorMessage, Field } from "formik"

export default function FormGroupInput({ type, label, placeholder, minLength, maxLength }) {
  return (
    <div>
      <label htmlFor={type}>{label}</label>
      <div>
        <Field
          name={type}
          id={type}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
        ></Field>
      </div>
      <ErrorMessage name={type} />
    </div>
  )
}
