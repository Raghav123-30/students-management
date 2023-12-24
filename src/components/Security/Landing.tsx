"use client";
import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Landing = () => {
  const { loading, setLoading, setIsAuthenticated, isAuthenticated } =
    useAuth();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("hook is running");

    const interval = setInterval(
      onAuthStateChanged(auth, (userName) => {
        console.log(userName);

        if (userName) {
          setIsAuthenticated(true);
        }

        setLoading(false);
        setAuthChecked(true);
      }),

      100000
    );

    console.log("ran auth check!!!!!");

    return () => clearInterval(interval);
  }, []);

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

  if (loading || !authChecked) {
    return (
      <div
        className="min-h-screen flex flex-col justify-center items-center px-4"
        data-theme="light"
      >
        <div className="flex gap-4">
          <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
        </div>
      </div>
    );
  } else if (!loading && isAuthenticated) {
    return null; // Render nothing or any other component for authenticated state
  } else {
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
          <p className=" hover:underline">
            Forgotten your username or password?
          </p>
        </div>
      </div>
    );
  }
};

export default Landing;
