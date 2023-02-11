import React from "react";
import { Batman_homePage } from "../assets";

const Home = () => {
  return (
    <section className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <img src={Batman_homePage} className="w-full h-full object-cover opacity-90" />
      </div>
    </section>
  );
};

export default Home;
