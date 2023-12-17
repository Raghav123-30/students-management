"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

import { MdMenu, MdClose } from "react-icons/md";

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

const MobileNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggle = () => setIsDrawerOpen(!isDrawerOpen);
  const { setIsAuthenticated } = useAuth();
  return (
    <div className="drawer drawer-end z-50">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={toggle}
      />
      <div className="drawer-content flex items-center gap-2">
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost ">
          {!isDrawerOpen ? <MdMenu size={28} /> : <MdClose size={28} />}
        </label>
        <Link href={"/"} className="font-extrabold text-lg">
          Home
        </Link>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex gap-4 flex-col justify-center items-center">
          {links.map((item) => (
            <Link
              href={item.route}
              className="font-semibold  px-4 py-2 rounded w-28"
              onClick={toggle}
              key={item.title}
            >
              {item.title}
            </Link>
          ))}

          <button
            className="btn btn-primary "
            onClick={() => {
              localStorage.removeItem("isAuthenticated");
              setIsAuthenticated(false);
            }}
          >
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
