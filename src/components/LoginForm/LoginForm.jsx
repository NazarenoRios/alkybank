import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogButton, LoginIntro } from "./StyledComponents";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import AlkemyLogo from "../../assets/alkemy-logo.png";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGoogleLogIn } from "./useGoogleLogIn";
import googleIcon from "../../assets/google-icon.svg"

const LoginForm = () => {
  const { logInWithGoogle } = useGoogleLogIn();

  const [loginTry, SetLoginTry] = useState(false);
  const { signin, token } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      signin(email, password).then((res) => {
        if (res.status === 200) {
          toast.success("Login successfull");
        }
      });
    } catch (e) {
      SetLoginTry(true);
      console.log(e);
    }
  };

  return (
    <section className="h-full gradient-formmd:h-screen">
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48 mb-4"
                        src={AlkemyLogo}
                        alt="logo"
                      />
                      <h4 className="text-xl mt-1 mb-12 pb-1">
                        We are The{" "}
                        <span className="text-blue-400">Alkybank Team</span>
                      </h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <p className="mb-4">Please login to your account</p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                            errors.email &&
                            `focus:border-red-600 focus:ring-red-600 border-red-600`
                          }`}
                          placeholder="Email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "Please enter a valid email",
                            },
                          })}
                        />
                        {errors.email && (
                          <span className="text-red-600 text-sm">
                            {errors.email.message}
                          </span>
                        )}
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                            errors.password &&
                            `focus:border-red-600 focus:ring-red-600 border-red-600`
                          }`}
                          placeholder="Password"
                          {...register("password", {
                            required: "Password is required",
                            // minLength: {
                            //   value: 5,
                            //   message: ""
                            // },
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message: "Invalid password",
                            },
                          })}
                        />
                        {errors.password && (
                          <span className="text-red-600 text-sm">
                            {errors.password.message}
                          </span>
                        )}

                        {loginTry && (
                          <span className="text-red-600 text-sm">
                            * It seems your email or password are incorrect
                          </span>
                        )}
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <LogButton
                          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="submit"
                          onSubmit={onSubmit}
                        >
                          Log in
                        </LogButton>
                        <a className="text-gray-500" href="#!">
                          Forgot password?
                        </a>
                      </div>

                      <div className="-mt-8 mb-5">
                        <button
                          className="flex gap-3 justify-center items-center w-full h-[50px] rounded-[10px] border-solid border-[1px] border-[#F5F5F5]"
                          onClick={() => {
                            logInWithGoogle();
                          }}
                          type="button"
                        >
                          <img
                            className="w-[24px] h-[24px]"
                            src={googleIcon}
                            alt="Ícono de Google"
                          />
                          <span className="font-semibold text-text2">
                            Log in with Google
                          </span>
                        </button>
                      </div>

                      <div className="flex items-center justify-center pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <Link to="/signup">
                          <button
                            type="button"
                            className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          >
                            Register
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <LoginIntro className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6 text-center">
                      We are more than just a Wallet
                    </h4>
                    <p className="text-sm tracking-widest leading-8">
                      <span className="font-bold">Alkybank,</span> lorem ipsum
                      dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </LoginIntro>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
