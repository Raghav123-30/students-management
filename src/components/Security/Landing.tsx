"use client";

type Props = {
  setUserName: (current: string) => void;
  setIsAuthenticated: (current: boolean) => void;
};
const Landing = ({ setUserName, setIsAuthenticated }: Props) => {
  const onAuthentication = () => {
    console.log("handling authentication");
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };
  return (
    <div
      data-theme="light"
      className="h-screen flex flex-col justify-center items-center px-4"
    >
      <div className="card  bg-base-100 shadow-xl flex flex-col gap-5 px-10 py-20 ">
        <h1 className="text-xl  font-bold">Login to continue!</h1>
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full max-w-xs input-secondary"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs input-secondary"
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
