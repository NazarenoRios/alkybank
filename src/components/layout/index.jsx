import React from "react";
import Header from "../Header/Header"

export const Layout = ({children}) => {
    return <div>
            <Header/>
            {children}
            <div>footer</div>
    </div>
};