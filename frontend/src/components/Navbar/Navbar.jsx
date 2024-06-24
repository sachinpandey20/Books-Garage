import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { ImMenu3 } from "react-icons/im";
const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "All Books",
      link: "/all-books",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
  ];
  const [MobileNav, setMobileNav] = useState("hidden");
  return (
    <>
      <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img className="h-10 me-4" src={Logo} alt="Logo" />
          <h1 className="text-2xl font-semibold">Books Garage</h1>
        </Link>
        <div>
          <div className="nav-links-bookheaven block md:flex items-center gap-4">
            <div className="hidden md:flex gap-4">
              {links.map((items, i) => (
                <Link
                  to={items.link}
                  className="hover:text-blue-500 transition-all duration-300"
                  key={i}
                >
                  {items.title}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex gap-4">
              <Link
                to="/Login"
                className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
              >
                Log In
              </Link>
              <Link
                to="/SignUp"
                className="px-4 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
              >
                Sign Up
              </Link>
            </div>
            <button
              className="md:hidden block text-white text-3xl hover:text-zinc-400"
              onClick={() =>
                MobileNav === "hidden"
                  ? setMobileNav("block")
                  : setMobileNav("hidden")
              }
            >
              <ImMenu3 />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`${MobileNav} bg-zinc-800 h-screen absoulte top-0 left-0 w-full z-40 flex flex-col items-center items-between justify-center`}
      >
        {links.map((items, i) => (
          <Link
            to={items.link}
            className={`${MobileNav} "text-white text-4xl mb-4 font-semibold text-white hover:text-blue-500 transition-all duration-300`}
            key={i}
            onClick={() =>
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            {items.title}
          </Link>
        ))}
        <Link
          to="/Login"
          className={`${MobileNav} px-8 mb-8 py-2 text-3xl font-semibold border border-blue-500 rounded text-white hover:bg-white hover:bg-white-800 hover:text-zinc-800 transition-all duration-300`}
        >
          Log In
        </Link>
        <Link
          to="/SignUp"
          className={`${MobileNav} px-8 mb-8 py-2 text-3xl font-semibold bg-blue-500 rounded hover:bg-white hover:bg-white-800 hover:text-zinc-800 transition-all duration-300`}
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default Navbar;
