import React, { useEffect, useState } from "react";
import {
  AiFillBank,
  AiFillHome,
  AiFillSafetyCertificate,
  AiFillShop,
  AiOutlineInfo,
  AiOutlineMenu,
  AiOutlineMoneyCollect,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import dell from "../../assets/Dell-Logo.wine.svg";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="fixed h-screen bg-blue left-0 w-[50px] md:w-[240px] p-4 text-white">
      <div className="flex flex-col items-center justify-center">
        <Link to={"/"} className="flex items-center gap-x-2 gap-y-5 my-5">
          <AiFillSafetyCertificate size={30} />
          <h1 className="text-2xl hidden md:block">CryptoVerse</h1>
        </Link>
        <button
          className="flex justify-center md:hidden my-5 items-center"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <AiOutlineMenu />
        </button>
      </div>

      <ul className="">
        {activeMenu && (
          <li className="flex items-center justify-center md:items-start md:justify-start flex-col gap-y-10 capitalize my-10">
            <NavLink
              to={`/`}
              className={(navClass) =>
                navClass.isActive
                  ? "nav-active nav-link gap-x-4 w-full"
                  : "nav-link gap-x-4 "
              }
            >
              <span>
                <AiFillHome size={25} />
              </span>
              <span className="hidden md:block">home</span>
            </NavLink>

            <NavLink
              to={`/cyptocurr`}
              className={(navClass) =>
                navClass.isActive
                  ? "nav-active nav-link gap-x-4 w-full"
                  : "nav-link gap-x-4"
              }
            >
              <span>
                <AiFillBank size={25} />
              </span>
              <span className="hidden md:block">currencies</span>
            </NavLink>

            <NavLink
              className={(navClass) =>
                navClass.isActive
                  ? "nav-active justify-items-center nav-link gap-x-4 w-full"
                  : "nav-link gap-x-4 justify-items-center"
              }
              to={`/exchanges`}
            >
              <span>
                <AiOutlineMoneyCollect size={25} />
              </span>
              <span className="hidden md:block">exchanges</span>
            </NavLink>

            <NavLink
              to={`/news`}
              className={(navClass) =>
                navClass.isActive
                  ? "nav-active nav-link gap-x-4 w-full"
                  : "nav-link gap-x-4"
              }
            >
              <span>
                <AiOutlineInfo size={25} />
              </span>
              <span className="hidden md:block">news</span>
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
