import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-[100vw] min-h-screen mx-auto overflow-x-hidden">
      <Header />
      <div className="w-[90vw] mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
