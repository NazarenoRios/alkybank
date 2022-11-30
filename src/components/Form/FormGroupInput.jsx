import { ErrorMessage, Field } from "formik"

export default function FormGroupInput({ type, label, placeholder, minLength, maxLength }) {
  return (
    <div className="flex flex-col items-start w-full text-[#FF7085]">
      <label className="text-text1 text-[14px] font-medium" htmlFor={type}>
        {label}
      </label>
      <Field
        className="w-full rounded-[10px] border-solid border-[1px] border-[#F2F2F2
]  p-2 px-3 text-[#8e9297] focus:outline outline-1 outline-primary"
        name={type}
        type={type}
        id={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      ></Field>
      <ErrorMessage name={type} />
    </div>
  )
}
