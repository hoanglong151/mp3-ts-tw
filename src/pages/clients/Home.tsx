import React from "react";
import Footer from "~/layouts/clients/Footer";
import MenuLeft from "~/layouts/clients/MenuLeft";
import NavBar from "~/layouts/clients/NavBar";

const Home = () => {
  return (
    <div className="flex">
      <MenuLeft />
      <div className="flex items-center px-[61px] w-full flex-1">
        <NavBar />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
