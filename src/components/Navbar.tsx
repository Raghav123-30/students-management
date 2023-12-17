import React from "react";
import Link from "next/link";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <>
      <div className="md:flex hidden navbar bg-base-100 md:px-8 lg:px-16 xl:px-24">
        <div className="navbar-start">
          <Link href={"/"} className="font-extrabold text-lg">
            Home
          </Link>
        </div>
        <div className="navbar-center gap-8">
          <Link href={"/"} className="font-semibold">
            Dashboard
          </Link>
          <Link href={"/"} className="font-semibold">
            Tasks
          </Link>
          <Link href={"/"} className="font-semibold">
            Courses
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary">Logout</button>
        </div>
      </div>
      <div className="flex md:hidden">
        <MobileNavigation />
      </div>
    </>
  );
};

export default Navbar;
