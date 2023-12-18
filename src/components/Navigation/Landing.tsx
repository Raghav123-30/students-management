"use client";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Landing = () => {
  const { loginUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onAuthentication = () => {
    if (!email || !password) {
      alert("please provide valid fields");
    } else {
      loginUser(email, password);
    }
  };

  return (
    <div
      data-theme="light"
      className="h-screen flex flex-col justify-center items-center px-4"
    >
      <div className="card  bg-base-100 shadow-xl flex flex-col gap-5 px-10 py-20 ">
        <h1 className="text-xl  font-bold">Login to continue!</h1>
        <input
          type="email"
          placeholder="Username"
          className="input input-bordered w-full max-w-xs input-secondary"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs input-secondary"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn btn-success text-white"
          onClick={onAuthentication}
        >
          LogIn
        </button>
        <p className=" hover:underline">Forgotten your username or password?</p>
      </div>
    </div>
  );
};

export default Landing;
