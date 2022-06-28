import { Link } from "gatsby";
import React from "react";
import BUILDLogo from "../assets/svgs/build-logo.svg";
import { HiOutlineHeart, HiMenu, HiX } from "react-icons/hi";
import classnames from "classnames";

import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Navbar({ location }) {
  const routes = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about-us" },
    { label: "Our Story", to: "/our-story" },
    { label: "Our Programs", to: "/programs" },
    { label: "Blog", to: "/coming-soon" },
  ];

  return (
    <header className="bg-transparent absolute w-full">
      <div className="flex justify-between max-w-[1440px] px-[2em] py-[18px] mx-auto  items-center text-sm">
        <Link to="/" className="h-[40px]">
          <img src={BUILDLogo} alt="BUILD Nigeria Logo" className="h-[32px]" />
        </Link>

        <nav className="font-semibold leading-6 hidden md:block">
          <ul className="flex gap-6 items-center">
            {routes.map((route) => {
              return (
                <li key={route.label}>
                  <NavbarItemLink
                    item={route}
                    currentRoute={location.pathname}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        <nav className="leading-6 font-bold hidden md:block">
          <ul className="flex gap-4 items-center">
            <li className={`text-primary bg-secondary nav-btn`}>
              <Link to={"/contact-us"}>Contact Us</Link>
            </li>
            <li>
              <Link to="/donate" className="bg-primary nav-btn text-white">
                <HiOutlineHeart />
                <span>Donate</span>
              </Link>
            </li>
          </ul>
        </nav>

        <Popover className="md:hidden">
          {({ open }) => (
            <>
              <Popover.Button aria-label="Open or Close Menu"
                className={`
                group inline-flex items-center appearance-none focus:outline-none focus-visible:ring-0 `}
              >
                {open ? (
                  <HiX
                    className="transition duration-150 ease-in-out"
                    size={24}
                  />
                ) : (
                  <HiMenu
                    className="transition duration-150 ease-in-out"
                    size={24}
                  />
                )}
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <div className="relative grid gap-4 bg-white p-7 ">
                      {routes.map((route) => (
                        <NavbarItemLink
                        key={route.label}
                          item={route}
                          currentRoute={location.pathname}
                          type="mobile"
                        />
                      ))}
                    </div>
                    <div className="bg-gray-50 p-7">
                      <nav className="leading-6 font-bold  transition duration-150 ease-in-out">
                        <ul className="flex gap-4 items-center">
                          <li className={`text-primary bg-secondary nav-btn`}>
                            <Link to={"/contact-us"}>Contact Us</Link>
                          </li>
                          <li>
                            <Link
                              to="/donate"
                              className="bg-primary nav-btn text-white"
                            >
                              <HiOutlineHeart />
                              <span>Donate</span>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </header>
  );
}

const NavbarItemLink = ({ item, type = "main", currentRoute }) => {
  const navbarItemClass = classnames({
    "text-primary font-bold": currentRoute === item.to,
    "text-black": currentRoute !== item.to,
  });

  return type === "main" ? (
    <Link
      to={item.to}
      className={`${navbarItemClass} hover:text-primary py-2 rounded-md transition duration-2500 ease-linear  text-[12.8px]`}
      aria-current="page"
      title={item.title}
    >
      {item.label}
    </Link>
  ) : type === "mobile" ? (
    <Link
      to={item.to}
      className={`${navbarItemClass} hover:text-primary px-2 py-1 rounded-md transition duration-2500 ease-linear  text-md font-medium`}
      aria-current="page"
      title={item.title}
    >
      {item.label}
    </Link>
  ) : (
    <Link
      key={item.label}
      to={item.to}
      className={`${navbarItemClass} flex items-center p-2 -m-3 group transition duration-150 ease-in-out rounded-lg focus:outline-none cursor-pointer hover:text-primary`}
    >
      {item.icon && (
        <div className="flex items-center justify-center flex-shrink-0">
          <item.icon className="" size="22" aria-hidden="true" />
        </div>
      )}
      <div className="ml-4">
        <p className="text-sm font-medium ">{item.label}</p>
      </div>
    </Link>
  );
};
