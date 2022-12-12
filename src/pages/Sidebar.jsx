import React from "react";
import Header from "../components/Header/Header";
import Movements from "./Movements";

export default function Sidebar() {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="flex flex-col  p-3 bg-gray-800 shadow w-60">
            aaaaaaaaaaaaa
        </div>
        <div className=" mx-auto">
          <Movements />
        </div>
      </div>
    </div>
  );
}
