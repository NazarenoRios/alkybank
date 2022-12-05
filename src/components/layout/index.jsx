import React from "react";
import Header from "../Header/Header"
import {Sidebar} from "../sidebar"

export const Layout = ({children}) => {
    return <div className="relative">
            <Header/>
            <Sidebar/>
            {children}
            <div>footer</div>
    </div>
};