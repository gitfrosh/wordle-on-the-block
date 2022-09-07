import Header from "./Header";
import Footer from "./Footer";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="text-teal-600 bg-[#FFFFFF]">
      <Header />
      <section className="text-gray-600 body-font">
        {children}</section>
      <Footer />
    </div>
  );
}
