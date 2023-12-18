"use client";

import React from "react";
import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

type Route = {
  title: string;
  route: string;
};

const links: Route[] = [
  {
    title: "Dashboard",
    route: "/dashboard",
  },
  {
    title: "Courses",
    route: "/courses",
  },
  {
    title: "Tasks",
    route: "/tasks",
  },
];
const Navbar = () => {
  const router = useRouter();
  const { setIsAuthenticated, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("logged out");
      setIsAuthenticated(false);
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="md:flex hidden navbar bg-base-100 md:px-8 lg:px-16 xl:px-24  ">
        <div className="navbar-start">
          <Link href={"/"} className="font-extrabold text-lg">
            Home
          </Link>
        </div>
        <div className="navbar-center gap-8">
          {links.map((item) => (
            <Link href={item.route} key={item.title} className="font-semibold">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="flex md:hidden">
        <MobileNavigation />
      </div>
    </>
  );
};

export default Navbar;
