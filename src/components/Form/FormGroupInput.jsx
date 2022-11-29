import { ErrorMessage, Field } from "formik"

export default function FormGroupInput({ type, label, placeholder, minLength, maxLength }) {
  return (
    <div className="flex flex-col items-start w-full text-[#FF7085]">
      <label className="text-[#ffffff]" htmlFor={type}>
        {label}
      </label>
      <Field
        className="w-full rounded-md p-2 px-3 text-[#8e9297] focus:outline outline-1 outline-[#0092BE] border-none"
        name={type}
        id={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      ></Field>
      <ErrorMessage name={type} />
    </div>
  )
}
