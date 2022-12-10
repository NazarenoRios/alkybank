import React from "react";
import LogoSvg from "../../assets/alkemy_logo.png";

export const Logo = () => {
    return (<a href="/" class="flex items-center pl-2.5 mb-5 text-2xl dark:text-white">
    <img
      src={LogoSvg}
      class="mr-3 w-40 h-auto max-w-[50px]"
      alt="Alkemy bank Logo"
    />
    Alkemy
  </a>)
};