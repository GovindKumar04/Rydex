import React, { useState } from "react";
import { Link } from "react-router-dom";
import { asset } from "../assets/index";

function Captainlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setcaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault()
    setcaptainData({
      email:email,
      password:password
    })
    console.log(captainData)
    setEmail("")
    setPassword("")
  }
  
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <form onSubmit={submitHandler}>
          <img className="w-16 mb-10" src={asset.Rydex} alt="" />
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] font-semibold text-white mb-7 rounded px-4 py-2  w-full text-lg">
            Login
          </button>
          <p className="text-center">
            New here?{" "}
            <Link to="/captain-signup" className="text-blue-600 ">
              Register as a captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#db9539] flex items-center justify-center  text-white rounded font-semibold mb-5 px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
}

export default Captainlogin;
