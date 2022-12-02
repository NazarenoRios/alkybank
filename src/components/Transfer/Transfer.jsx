import { ErrorMessage, Field } from "formik"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import Button from "../Button"

export default function Transfer() {
  return (
    <section className="flex flex-col justify-center gap-5 w-full max-w-[375px] h-full ml-[40px] mt-[30px] mr-[30px]">
      <h1 className="font-semibold text-[25px]">Transfer</h1>
      <div className="w-full p-5 bg-[#fafafa] rounded-[10px]">
        <h2 className="text-[#929eae]">Your Balance</h2>
        <span className="font-bold">$5240.00</span>
      </div>
      <div>
        <Formik
          initialValues={{
            cvu: "",
            type: "",
            amount: ""
          }}
          validationSchema={Yup.object({
            cvu: Yup.string()
              .min(4, "Must contain 4 characters")
              .max(4, "Must contain 4 characters")
              .matches(/^\d+$/, "Must contain only numbers")
              .required("Required"),
            amount: Yup.string()
              .max(20, "Must contain 20 characters or less")
              .matches(/^[1-99999999]+$/, "The mimimum amount is $1")
              .required("Required")
          })}
          onSubmit={values => handleSubmit(values)}
        >
          <Form className="flex flex-col justify-center gap-10 max-w-[400px]">
            <div className="text-error">
              <h2 className="font-semibold text-[18px] text-black">Enter CVU</h2>
              <Field
                className="h-[48px] w-full text-black rounded-[15px] focus:outline outline-1 outline-primary border-solid border-[1px] border-[#F5F5F5] bg-[#f8f8f8] pl-3"
                placeholder="Example: 4281"
                type="text"
                name="cvu"
              ></Field>
              <ErrorMessage name="cvu" />
            </div>
            <div className="flex flex-col justify-center gap-3">
              <h2 className="font-semibold text-[18px]">Choose the transfer type</h2>
              <div className="flex items-center gap-2">
                <Field type="radio" id="topup" name="type" value="topup"></Field>
                <label for="topup">Topup</label>
              </div>
              <div className="flex items-center gap-2">
                <Field type="radio" id="payment" name="type" value="payment"></Field>
                <label for="payment">Payment</label>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <h2 className="font-semibold text-[18px]">¿How much do you want to transfer?</h2>
              <div className="w-full text-error flex justify-center items-center h-[48px] rounded-[15px] focus:outline outline-1 outline-primary border-solid border-[1px] border-[#F5F5F5] bg-[#f8f8f8] relative">
                <span className="absolute left-[10px] top-[10px] text-black">$</span>
                <Field
                  className="h-full w-full text-black rounded-[15px] focus:outline outline-1 outline-primary border-solid border-[1px] border-[#F5F5F5] bg-[#f8f8f8] pl-7"
                  placeholder="Example: $2000"
                  type="text"
                  name="amount"
                ></Field>
                <ErrorMessage name="amount" />
              </div>
            </div>
            <Button variant="primary" text="Send transfer" type="submit" />
          </Form>
        </Formik>
      </div>
    </section>
  )
}
