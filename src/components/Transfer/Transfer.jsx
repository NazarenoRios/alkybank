import { ErrorMessage, Field } from "formik"
import { Form, Formik } from "formik"
import { useSelector } from "react-redux"
import * as Yup from "yup"
import { useTransfer } from "./useTransfer"
import Button from "../Button"

export default function Transfer({ totalBalance }) {
  const walletState = useSelector(state => state.walletReducer)
  const { handleSubmit } = useTransfer()
  const walletId = sessionStorage.getItem("walletId")

  return (
    <section className="flex flex-col justify-center items-center md:items-stretch gap-5 box-border w-full md:max-w-[375px] h-full border-solid border-t-[1px] border-[#F2F2F2] dark:border-[#343152] pt-5 mt-5">
      <h1 className="font-semibold text-[18px]">Quick transfer</h1>
      <>
        <Formik
          initialValues={{
            accountId: "",
            type: "payment",
            amount: ""
          }}
          validationSchema={Yup.object({
            accountId: Yup.string()
              .min(4, "Must contain 4 characters")
              .max(4, "Must contain 4 characters")
              .test(
                "different",
                "You can't transfer to the same account",
                value => value !== walletId
              )
              .matches(/^\d+$/, "Must contain only numbers")
              .required("Required"),
            amount: Yup.string()
              .max(6, "You have exceeded the maximum amount")
              .matches(/^\d+$/, "Must contain only numbers")
              .test("insufficient", "The minimum amount must be higher than 0", value => value > 0)
              .required("Required")
          })}
          onSubmit={values => handleSubmit(values, totalBalance)}
        >
          <Form className="flex flex-col justify-center gap-5 w-full md:max-w-[400px]">
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-4 text-error max-w-[150px] sm:max-w-[200px]">
                <h2 className="text-[16px] text-black dark:text-white">Account Id</h2>
                <Field
                  className="max-w-[200px] h-[48px] w-full text-black rounded-[15px] focus:outline outline-1 outline-primary border-solid border-[1px] border-[#F5F5F5] bg-[#f8f8f8] pl-3"
                  placeholder="Example: 4281"
                  type="text"
                  name="accountId"
                ></Field>
                <ErrorMessage name="accountId" />
              </div>
              <div className=" flex flex-col justify-center gap-3">
                <h2 className="text-[16px]">Transfer type</h2>
                <div className="flex items-center gap-2">
                  <Field name="firstName">
                    {() => (
                      <div className="flex gap-4 items-center">
                        <input
                          type="radio"
                          id="payment"
                          name="type"
                          value="payment"
                          defaultChecked
                        />
                        <label htmlFor="payment">Payment</label>
                      </div>
                    )}
                  </Field>
                </div>
                <div className="text-error">
                  <ErrorMessage name="type" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <h2 className="font-semibold text-[16px]">How much (ARS) do you want to transfer?</h2>
              <div className="w-full  flex justify-center items-center h-[48px] rounded-[15px] focus:outline outline-1 outline-primary border-solid border-[1px] border-[#F5F5F5] bg-[#f8f8f8] relative">
                <span className="absolute left-[10px] top-[10px] text-black">$</span>
                <Field
                  className="h-full w-full text-black rounded-[15px] focus:outline outline-1 outline-primary border-solid border-[1px] border-[#F5F5F5] bg-[#f8f8f8] pl-7"
                  placeholder="Example: $2000"
                  type="text"
                  name="amount"
                ></Field>
              </div>
              <div className="text-error">
                <ErrorMessage name="amount" />
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <Button variant="primary" text="Send transfer" type="submit" />
            </div>
          </Form>
        </Formik>
      </>
    </section>
  )
}
