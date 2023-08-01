// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import PrimaryButton from "./shared/PrimaryButton";
import OutlineButton from "./shared/OutlineButton";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navItem = [
    {
      name: "Home",
      id: 0,
      path: "/",
    },
    {
      name: "Appointment",
      id: 1,
      path: "/appointment",
    },
    {
      name: "Apply Doctor",
      id: 4,
      path: "/applydoctor",
    },
  ];

  const navItemAdmin = [
    {
      name: "Home",
      id: 0,
      path: "/",
    },
    {
      name: "Doctor",
      id: 4,
      path: "/admin/doctors",
    },
    {
      name: "Users",
      id: 2,
      path: "/admin/users",
    },
  ];

  return (
    <div className="nav py-3 fixed top-0 left-0 w-full z-10 ease-in duration-300 shadow-sm backdrop-blur-md bg-white/80">
      <div className="container mx-auto  px-10 sm:px-8 md:px-6 lg:px-10">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <div className="flex items-center gap-4">
              <img
                src={logo2}
                alt=""
                className="logo cursor-pointer h-14 "
              />
              <div className="text-2xl font-semibold text-primary hidden sm:inline-block"> pizza <span className=" text-orange-500">portal</span></div>
            </div>


          </NavLink>

          <div className=" lg:items-center lg:space-x-8 hidden lg:flex">
            <div className="flex space-x-4">
              <div className="dropdown dropdown-end text-black">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      0
                    </span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-white shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">
                      0 Items
                    </span>

                    <div className="card-actions">

                      <button className="btn text-white hover:bg-red-600 hover:border-red-600 border-red-500 btn-sm bg-red-500 btn-block">
                        see foods cart
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              <NavLink to="/login">
                <OutlineButton>login</OutlineButton>
              </NavLink>
              <NavLink to="/register">
                <PrimaryButton>Register</PrimaryButton>
              </NavLink>
            </div>
          </div>

          {/* Mobile Button */}
          <div onClick={handleNav} className="block lg:hidden z-10">
            {nav ? (
              <AiOutlineCloseCircle
                className="text-primary cursor-pointer"
                size={26}
              />
            ) : (
              <HiMenu size={26} className="text-primary cursor-pointer" />
            )}
          </div>

          <div
            className={`lg:hidden  absolute w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-bold ease-in  shadow-sm backdrop-blur-md bg-white/80 top-0 duration-500
      ${nav ? "right-0" : "right-[-100%]"} pt-16 `}
          >
            <div className="flex flex-col space-y-8">
              <div className="flex space-x-4">
                <NavLink to="/login">
                  <OutlineButton>login</OutlineButton>
                </NavLink>
                <NavLink to="/register">
                  <PrimaryButton>Register</PrimaryButton>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
