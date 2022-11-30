import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/not-found.webp";

const NotFoundError = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md text-center">
          <div className="text-5xl font-dark font-bold mb-3">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal ">
            Sorry we couldn't find this page.{" "}
          </p>
          <br />
          <p className="mb-8 ">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <Link to="/c">
            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              Back to Homepage
            </button>
          </Link>
        </div>
        <div className="max-w-lg">
          <img src={NotFoundImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundError;
