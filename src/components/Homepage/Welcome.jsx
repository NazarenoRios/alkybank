import React from "react"
import { Link } from "react-router-dom"
import AlkemyLogo from "../../assets/alkemy-logo.png"
import LoginButton from "../../common/LoginButton/LoginButton"

const Welcome = () => {
  return (
    <div className="my-auto">
      <div className="flex justify-center items-center">
        <img className="w-48" src={AlkemyLogo} alt="" />
      </div>
      <hr className="my-4 bg-black h-0.5" />
      <h1 className="uppercase text-5xl font-bold">
        Welcome to <span className="text-primary">ALKYBANK</span>
      </h1>
      <div className="my-6">
        <Link to="/login" className="my-6">
          <LoginButton />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-5 text-[gray] text-center">
        <span className="mr-2">New on Alkybank?</span>
        <Link className="bg-primary p-2 box-border rounded-[10px] text-text2" to="/signup">
          Sign up now
        </Link>
      </div>
    </div>
  )
}

export default Welcome
