import React from "react";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
    const navigate = useNavigate()

    function logout () {
        localStorage.removeItem("token")
        // localStorage.removeItem("name")
        // localStorage.removeItem("email")
    }

    useEffect(() => {
        logout()
        navigate("/")
    });

    return <div>Logout</div>
};

export default Logout