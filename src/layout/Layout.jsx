import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/navbar/Header";
import Sidebar from "../components/sidebar/Sidebar";
import RouthPath from "../routes/RouthPath";

const Layout = () => {
  return (
    <>
      <div className="flex overflow-hidden app">
        <div className="flex-none nb">
          <Sidebar />
        </div>

        <div className="bg-gray-900 text-white flex-1 p-4 w-full ml-10 md:ml-60  main">
          <div className="routes">
            <RouthPath />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
