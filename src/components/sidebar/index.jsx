import React from "react";
import { MenuIcon } from "../../ui/icons";
import { MenuXIcon } from "../../ui/icons";
import { useState } from "react";
import { SidebarContainer, SidebarContent } from "./styled.jsx";
import { Ul } from "../sidebar/styled";
import classes from "./index.module.css";
import { Link } from "@mui/material";

export const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleOpenIconClick() {
    setMenuOpen(!menuOpen);
  }

  function handleCloseIconClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <SidebarContainer>
      {menuOpen ? (
        <SidebarContent>
          <MenuXIcon
            className={classes.menuXIcon}
            onClick={handleCloseIconClick}
          />
          <Ul>
            <li>
              <Link underline="none" variant="h6" color="#fff" href="/login">
                Log in
              </Link>
            </li>
            <li>
              <Link underline="none" variant="h6" color="#fff" href="#">
                Add funds
              </Link>
            </li>
            <li>
              <Link underline="none" variant="h6" color="#fff" href="#">
                Expenses
              </Link>
            </li>
            <li>
              <Link underline="none" variant="h6" color="#fff" href="#">
                Balance
              </Link>
            </li>
            <li>
              <Link underline="none" variant="h6" color="#fff" href="#">
                Last movements
              </Link>
            </li>
            <li>
              <Link underline="none" variant="h6" color="#fff" href="#">
                Send funds
              </Link>
            </li>
          </Ul>
        </SidebarContent>
      ) : (
        <MenuIcon onClick={handleOpenIconClick} />
      )}
    </SidebarContainer>
  );
};

