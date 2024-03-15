import React, { useState } from "react";

import Header from "./Header";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getData = (e) =>{
    e.preventDefault();  // without reloading the page to get the data from the form
    console.log(fullName,email,password);
    setFullName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Header />

      {/* <div
          className="w-[100vw] h-[100vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp)",
          }}
        ></div> */}
      <div className=" absolute">
        <img
          className="w-[100vw] h-[100vh] bg-cover bg-center "
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp"
          alt="bg image"
        />
      </div>
      <form onSubmit={getData} className=" flex flex-col my-[350px] left-0 right-0 mx-auto items-center justify-center absolute bg-black w-[400px] h-[500px] opacity-90 rounded-3xl">
        <p className=" text-white font-bold mb-20 text-[35px]">
          {isLogin ? "Signup" : "Login"}
        </p>
        <div className=" flex flex-col items-center justify-center text-white w-[300px] h-[200px]">
          {isLogin && (
            <input
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              value={fullName}
              type="text"
              placeholder="Username"
              className="p-3 m-3 text-lg text outline-none bg-gray-800 text-white rounded-md"
            />
          )}
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Email"
            className="p-3 m-3 text-lg text outline-none bg-gray-800 text-white rounded-md"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            placeholder="Password"
            className="p-3 m-3 text-lg text outline-none bg-gray-800 text-white rounded-md "
          />
          <button className="p-3 m-3 text-lg bg-red-950 text-white rounded-lg w-[200px]">
            {isLogin ? "Signup" : "Login"}
          </button>
          <div className=" flex justify-start gap-5">
            <p className=" flex justify-start gap-5 ">
              {isLogin ? "Already have an account?" : "New to Netflix"}
              <span
                onClick={loginHandler}
                className=" hover:cursor-pointer hover:bg-green-900 text-blue-950 rounded-md   text-lg"
              >
                {isLogin ? "Login" : "Signup"}
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
