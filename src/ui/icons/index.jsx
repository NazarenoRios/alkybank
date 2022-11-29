import React from "react";
import UserIconSvg from "../../assets/user_icon.svg";
import MenuIconSvg from "../../assets/menu_icon.svg";
import MenuXIconSvg from "../../assets/menu_x.svg";
import styled from "styled-components";

export const UserIcon = ()=> {
    return <img src={UserIconSvg} alt="user icon svg" />
};

export const MenuIcon = ({onClick})=> {
    return <Img src={MenuIconSvg} onClick={onClick} alt="user icon svg" />
};

export const MenuXIcon = ({onClick, className})=> {
    return <Img src={MenuXIconSvg} onClick={onClick} className={className} alt="user icon svg" />
};

const Img = styled.img`
    cursor: pointer;
    max-width: 32px;
`

