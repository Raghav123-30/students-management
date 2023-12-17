"use client";
import Link from "next/link";
import { useState } from "react";

import { MdMenu, MdClose } from "react-icons/md";

const MobileNavigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggle = () => setDrawerOpen(!isDrawerOpen);
  return (
    <div className="drawer drawer-end">
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
          <Link
            href={"/"}
            className="font-semibold  px-4 py-2 rounded w-28"
            aria-label="close sidebar"
            onClick={toggle}
          >
            Dashboard
          </Link>
          <Link
            href={"/"}
            className="font-semibold w-28 px-4 py-2 rounded "
            onClick={toggle}
          >
            Tasks
          </Link>
          <Link
            href={"/"}
            className="font-semibold w-28 px-4 py-2 rounded "
            onClick={toggle}
          >
            Courses
          </Link>
          <button className="btn btn-primary " onClick={toggle}>
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
