import React from "react";
import {NavLink} from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';

const Aboutevent = () => {
  return (
    <>
    <div className=" pb-20 ">
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>

      <div className="bg-[#0000004f] md:mx-20 md:py-10 mx-5 py-10 border-2 border-[black] rounded-3xl shadow-2xl shadow-[black] font-['Jost']">
      <div>
        <p className="text-6xl text-white flex text-center md:justify-center">
          ABOUT EVENT
        </p>
        <div className="flex flex-col md:flex-row mx-10 md:mx-20 md:mb-20">
          <p className="my-20 text-white text-2xl">
            Techप्रेक्षा 2023 is established with a vision to bring out the
            hidden developers and tech enthusiasts from all over India and
            provide them a roof and platform to showcase their skills and
            ability. Join us at premises of Dronacharya College of Engineering
            (Gurugram) for 72 Hours of power and action packed event to manifest
            your ideas and creativity with other like minded Hackers and Coders.
          </p>
          <div>
            <img
              src="../images/circle.png"
              width="1800px"
              alt="not valid"
              className="my-2 md:mt-20"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-10 justify-center  pb-20">
          <p className="text-white text-center text-2xl md:text-4xl  ">
            <h1>WHEN</h1> <br />
            26th May 2022 (Thursday) <br />
            27th May 2022 (Friday) <br />
            28th May 2022 (Saturday) <br />
          </p>
          <div className="flex justify-center md:ml-60">
          <img src="../images/Line.png" alt="not valid" className="flex my-20 md:ml-40 w-4/6 md:w-4/6" />
          </div>
        </div>
        </div>
      </div>

      </div>
    </>
  );
};

export default Aboutevent;
