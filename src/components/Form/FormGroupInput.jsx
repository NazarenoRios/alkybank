import { ErrorMessage, Field } from "formik"
import eyeIcon from "../../assets/eye-icon.svg"
import closedEyeIcon from "../../assets/closed-eye-icon.svg"
import { useState } from "react"
export default function FormGroupInput({ type, label, placeholder, minLength, maxLength }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col items-start w-full text-[#FF7085] relative">
      <label className="text-text1 text-[14px] font-medium" htmlFor={type}>
        {label}
      </label>
      <Field
        className="w-full rounded-[10px] border-solid border-[1px] border-[#F2F2F2
]  p-2 px-3 text-[#8e9297] focus:outline outline-1 outline-primary"
        name={type}
        type={type === "password" ? (showPassword ? "text" : type) : type}
        id={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      ></Field>
      {type === "password" &&
        (showPassword ? (
          <img
            className="absolute right-0 top-0 w-[20px] h-[20px] mt-[32px] mr-[15px] cursor-pointer"
            src={closedEyeIcon}
            alt="Ver contraseña"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <img
            className="absolute right-0 top-0 w-[20px] h-[20px] mt-[32px] mr-[15px] cursor-pointer"
            src={eyeIcon}
            alt="Ocultar contraseña"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              filter:
                "invert(0%) sepia(9%) saturate(7496%) hue-rotate(331deg) brightness(93%) contrast(98%)"
            }}
          />
        ))}
      <ErrorMessage name={type} />
    </div>
  )
}
