import axios from "axios";
import { useForm } from "react-hook-form";
import { LogButton } from "../LoginForm/StyledComponents";
import AlkemyLogo from "../../assets/alkemy-logo.png";
import { useDispatch } from "react-redux";
import { paymentAction } from "../../redux/actions/paymentAction";

export default function PaymentsForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ amount, concept }) => {
    dispatch(paymentAction(amount, concept));
  };
  return (
    <div className="flex justify-center content-center">
      <section className="h-screen w-screen gradient-formmd:h-screen">
        <div className="flex justify-center items-center">
          <div className="container py-12 px-6 h-full">
            <div className="flex justify-center items-center h-full g-6 text-gray-800">
              <div className="xl:w-6/12">
                <div className="block bg-white shadow-lg rounded-lg">
                  <div className="">
                    <div className="">
                      <div className="md:p-12 md:mx-6">
                        <div className="text-center">
                          <img
                            className="mx-auto w-48 mb-4"
                            src={AlkemyLogo}
                            alt="logo"
                          />
                          <h4 className="text-xl mt-1 mb-12 pb-1">
                            Send money to whoever you want
                          </h4>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="mb-4">
                            <label>Amount</label>
                            <input
                              type="number"
                              className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                                errors.amount &&
                                `focus:border-red-600 focus:ring-red-600 border-red-600`
                              }`}
                              placeholder="Amount"
                              {...register("amount", {
                                required: "Amount is required",
                                pattern: {
                                  value:
                                    /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/gm,
                                  message: "Please enter a valid amount",
                                },
                              })}
                            />
                            {errors.amount && (
                              <span className="text-red-600 text-sm">
                                {errors.amount.message}
                              </span>
                            )}
                          </div>
                          <div className="mb-4">
                            <label>Concept</label>
                            <input
                              type="text"
                              className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                                errors.concept &&
                                `focus:border-red-600 focus:ring-red-600 border-red-600`
                              }`}
                              placeholder="concept"
                              {...register("concept", {
                                required: "Concept is required",
                                pattern: {
                                  //   value:
                                  //     /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                  message: "Please enter a concept",
                                },
                              })}
                            />
                            {errors.concept && (
                              <span className="text-red-600 text-sm">
                                {errors.concept.message}
                              </span>
                            )}
                          </div>
                          <div className="text-center pt-1 mb-12 pb-1">
                            <LogButton
                              className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                              type="submit"
                              onSubmit={onSubmit}
                            >
                              Toput Money
                            </LogButton>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
