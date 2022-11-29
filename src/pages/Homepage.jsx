import React from "react";
import Banner from "../components/Homepage/Banner";
import Welcome from "../components/Homepage/Welcome";

const Homepage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="container mx-auto grid md:grid-cols-2 md:gap-2 text-center">
        <Banner />
        <Welcome />
      </div>
    </div>
  );
};

export default Homepage;
