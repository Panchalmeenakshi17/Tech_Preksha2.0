import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Herosection from "./components/Herosection";
import Aboutevent from "./components/Aboutevent";
import Contact from "./components/Contact";
import Venue from "./components/Venue";
import Prize from './components/Prize';
import Form from './components/Form';
import Login from "./components/Login";
import Schedule from "./components/Schedule";
import Day1 from "./components/Day1";
import Day2 from "./components/Day2";
import Day3 from "./components/Day3";
import Corecards from "./components/Corecards";
import AdminLogin from "./components/AdminLogin";
import { useSelector } from "react-redux";
import TeamDetails from "./components/TeamDetails";

const App = () => {

	const teamState = useSelector((state) => state.loginTeamReducer);
	const { currentTeam } = teamState;

  return(
	<Router>
        <Routes>
			<Route exact path="/" element={<Herosection/>} />
			<Route exact path="/aboutevent" element={<Aboutevent/>} />
			<Route exact path="/prizes" element={<Prize/>} />
			<Route exact path="/venue" element={<Venue/>} />
			{currentTeam ? (
				<>
				<Route exact path="/form" element={<Herosection/>} />
			    <Route exact path="/login" element={<Herosection/>} />
			    <Route exact path="/adminlogin" element={<Herosection/>}/>
			    <Route exact path="/teamdetails" element={<TeamDetails/>}/>
				</>
			) : ( <>
				<Route exact path="/form" element={<Form/>} />
			    <Route exact path="/login" element={<Login/>} />
			    <Route exact path="/adminlogin" element={<AdminLogin/>}/>
				</>
			)}
			<Route exact path="/schedule" element={<Schedule/>}/>
			<Route exact path="/day1" element={<Day1/>}/>
			<Route exact path="/day2" element={<Day2/>}/>
			<Route exact path="/day3" element={<Day3/>}/>
			<Route exact path="/organizers" element={<Corecards/>}/>
			<Route exact path="/contacts" element={<Contact/>}/>
		</Routes>
	</Router>
  ) 
};

export default App;
