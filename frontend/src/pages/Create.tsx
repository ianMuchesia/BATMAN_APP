import React from "react";
import {Batman_createPage} from '../assets'
const Create = () => {
  return (
    <section className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <img
          src={Batman_createPage}
          className="w-full h-full object-cover opacity-90"
        />
      </div>
    </section>
  );
};

export default Create;
