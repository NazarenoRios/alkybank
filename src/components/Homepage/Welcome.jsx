import React from "react";
import { Link } from "react-router-dom";
import AlkemyLogo from "../../assets/alkemy-logo.png";
import LoginButton from "../../common/LoginButton/LoginButton";

const Welcome = () => {
  return (
    <div className="my-auto">

      {/* ALKEMY WELCOME + IMAGE */}

      <div className="flex justify-center items-center">
        <img className="w-48" src={AlkemyLogo} alt="" />
      </div>
      <hr className="my-4 bg-black h-0.5" />
      <h1 className="uppercase text-5xl font-bold">
        Welcome to <span className="text-blue-400">ALKYBANK</span>
      </h1>


      {/* LOGIN */}

      <div className="my-6">
        <Link to="/login" className="my-6">
          <LoginButton />
        </Link>
      </div>

      {/* REGISTER */}

      {/* <div className="flex items-center justify-center space-x-2 my-5">
        <span className="h-px w-16 bg-gray-700"></span>
        <span className="text-gray-400 font-normal">or</span>
        <span className="h-px w-16 bg-gray-700"></span>
      </div> */}

      <div className="text-[gray] text-center">
        <span className="mr-2">New on Alkybank?</span>
        <Link to="/register">
          <button
            className="cursor-pointer text-blue-400 hover:underline"
            type="submit"
          >
            Sign up now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
