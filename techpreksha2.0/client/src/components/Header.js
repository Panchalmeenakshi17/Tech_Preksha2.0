import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {logoutTeam} from '../actions/teamAction';

const Header = () => {

  const teamState = useSelector((state) => state.loginTeamReducer);
  const { currentTeam } = teamState;

  const dispatch = useDispatch();

  return (
    <>
      <div className="pt-8">
        <nav className="bg-white/30 backdrop-blur-md opacity-75 md:mx-8 py-2 md:px-1 mx-2 rounded-full flex justify-between items-center ">
          <div>
            <img
              src="../images/Myproject.png"
              width="50px"
              alt="not valid"
              className="mx-2"
            />
          </div>
          
          {currentTeam ? (<div className="flex gap-2">
            <NavLink to="/">
            <button className=" bg-white text-black font-semibold w-[150px] rounded-full  h-[45px] text-1xl hover:bg-teal-500 hover:text-white md:mx-1 mx-2 ">
              Dashboard
            </button>
            </NavLink>
            <NavLink to="/teamdetails">
            <button className=" bg-white text-black font-semibold w-[150px] rounded-full  h-[45px] text-1xl hover:bg-teal-500 hover:text-white md:mx-1 mx-2 ">
              Team Details
            </button>
            </NavLink>
            <button onClick={() => {dispatch(logoutTeam())}} className=" bg-white text-black font-semibold w-[120px] rounded-full  h-[45px] text-1xl hover:bg-teal-500 hover:text-white md:mx-1 mx-2 ">
              Logout
            </button>
            </div>
          ) : (
            <NavLink to="https://mdehd9hta8p.typeform.com/to/WXcMsQR3">
            <button className=" bg-white text-black font-semibold w-[120px] rounded-full  h-[45px] text-1xl hover:bg-teal-500 hover:text-white md:mx-1 mx-2 ">
              Register
            </button>
            </NavLink>
          )}
          
        </nav>
      </div>
    </>
  );
};

export default Header;
