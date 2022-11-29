import React from "react";
import { Logo } from "../../ui/logo";
import { Sidebar } from "../sidebar";
import { NavbarContainer, NavbarContent } from "./styled.jsx";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo />
        <Sidebar />
      </NavbarContent>
    </NavbarContainer>
  );
};
