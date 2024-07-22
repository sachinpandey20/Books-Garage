import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { ImMenu3 } from "react-icons/im";
import { useSelector } from "react-redux";
const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
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
    {
      title: "Admin Profile",
      link: "/profile",
    },
  ];
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  if (isLoggedIn === false) {
    links.splice(2, 3);
  }
  if(isLoggedIn == true && role === "admin") {
    links.splice(3,1);
  }
  if(isLoggedIn == true && role === "user") {
    links.splice(4,1);
  }
  const [MobileNav, setMobileNav] = useState("hidden");
  return (
    <>
      <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img className="h-10 me-4" src={Logo} alt="Logo" />
          <h1 className="text-2xl font-semibold">Books Garage</h1>
        </Link>
        <div>
          <div className="nav-links-bookGarage md:flex items-center gap-4">
            <div className="hidden md:flex gap-4">
              {links.map((items, i) => (
                <div key={i} className="flex items-center justify-center">
                  {items.title === "Profile"  || items.title === "Admin Profile" ? (
                    <Link
                      to={items.link}
                      className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
                    >
                      {items.title}
                    </Link>
                  ) : (
                    <Link
                      to={items.link}
                      className="hover:text-blue-500 transition-all duration-300"
                      key={i}
                    >
                      {items.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="hidden md:flex gap-4">
              {isLoggedIn === false && (
                <>
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
                </>
              )}
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
        {isLoggedIn === false && (
          <>
            <Link
              to="/Login"
              className={`${MobileNav} px-8 mb-8 py-2 text-3xl font-semibold border border-blue-500 rounded text-white hover:bg-white hover:bg-white-800 hover:text-zinc-800 transition-all duration-300`}
              onClick={() =>
                MobileNav === "hidden"
                  ? setMobileNav("block")
                  : setMobileNav("hidden")
              }
            >
              Log In
            </Link>
            <Link
              to="/SignUp"
              className={`${MobileNav} px-8 mb-8 py-2 text-3xl font-semibold bg-blue-500 rounded hover:bg-white hover:bg-white-800 hover:text-zinc-800 transition-all duration-300`}
              onClick={() =>
                MobileNav === "hidden"
                  ? setMobileNav("block")
                  : setMobileNav("hidden")
              }
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
