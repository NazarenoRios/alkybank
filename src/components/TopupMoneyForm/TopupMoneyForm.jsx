import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { topupAction } from "../../redux/actions/topupAction"
import { Tooltip } from "../ToolTip/Tooltip"

export default function TopupMoneyForm() {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const response = useSelector(state => state.topupReducer)
  const isLoading = useSelector(state => state.topupReducer.isLoading)
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    if (response.message || isLoading) {
      setDisplay(true)
    }
  }, [response])

  const onSubmit = ({ amount, concept }) => {
    dispatch(topupAction(amount, concept))
  }

  return (
    <div className="flex justify-center content-center ">
      <section className=" gradient-formmd:h-screen">
        <div className="flex justify-center items-center flex-col">
          {display && (
            <div className="container px-6 h-full">
              <Tooltip
                display={display}
                isLoading={isLoading}
                setDisplay={setDisplay}
                message={"Topup Success"}
                status="success"
              />
            </div>
          )}

          <div className="container py-12 px-6 h-full">
            <div className="flex justify-center items-center h-full g-6 text-gray-800">
              <div className="block bg-white dark:bg-dark2 shadow-lg rounded-lg">
                <div className="p-12 mx-6">
                  <div className="text-center">
                    <h1 className="dark:text-primary text-3xl p-5 flex  justify-center">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className=" w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                      </svg>
                      Add funds
                    </h1>
                    <h4 className="text-xl mt-1 mb-12 pb-1 dark:text-white">
                      ¿How much do you want to charge?
                    </h4>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                      <div className="flex flex-row align-center justify-center gap-6">
                        <select
                          className="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="types"
                          onChange={e => transactionsTypes(e.target.value)}
                        >
                          <option value="all">ARS</option>
                          <option value="topup">U$D</option>
                          <option value="payment">€EUR</option>
                        </select>
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
                              value: /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/gm,
                              message: "Please enter a valid amount"
                            }
                          })}
                        />
                        {errors.amount && (
                          <span className="text-red-600 text-sm">{errors.amount.message}</span>
                        )}
                      </div>
                    </div>
                    <div className="mb-4 dark:text-white">
                      <label>Concept</label>
                      <input
                        type="text"
                        className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                          errors.concept && `focus:border-red-600 focus:ring-red-600 border-red-600`
                        }`}
                        placeholder="concept"
                        {...register("concept", {
                          required: "Concept is required",
                          pattern: {
                            message: "Please enter a concept"
                          }
                        })}
                      />
                      {errors.concept && (
                        <span className="text-red-600 text-sm">{errors.concept.message}</span>
                      )}
                    </div>
                    <div className="text-center pt-1 mb-12 pb-1">
                      <button
                        className="inline-block px-6 py-2.5 font-medium text-xs leading-tight bg-primary uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                        type="submit"
                        onSubmit={onSubmit}
                      >
                        Charge Money
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
