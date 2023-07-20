import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import { getAdjacentDay } from "./Utils/get-days-method";
import CooksPage from "./Pages/CooksPage";
import WaitersPage from "./Pages/WaitersPage";

const App = () => {
	const [day, setDay] = useState("monday"); // Default day is Monday for demonstration

	useEffect(() => {
		// Retrieve the saved day from local storage
		const savedDay = localStorage.getItem("savedDay");
		if (savedDay) {
			setDay(savedDay);
		}
	}, []);

	const handlePrevDay = () => {
		// Logic to handle previous day
		// Ensured that day does not go below Monday		
		if (day === "monday") return;
		const prevDay = getAdjacentDay(day, "previous");
		setDay(prevDay);
		// Save the updated day to local storage
		localStorage.setItem("savedDay", prevDay);
	};

	const handleNextDay = () => {
		// Logic to handle next day
		// Ensure day does not go beyond Friday		
		if (day === "friday") return;
		const nextDay = getAdjacentDay(day, "next");
		setDay(nextDay);
		// Save the updated day to local storage
		localStorage.setItem("savedDay", nextDay);
	};

	return (
		<Router>
			<Routes>
				<Route
					path="/cooks"
					element={
						<CooksPage
							day={day}
							handleNextDay={handleNextDay}
							handlePrevDay={handlePrevDay}
						/>
					}
				/>
				<Route
					path="/waiters"
					element={
						<WaitersPage
							day={day}
							handleNextDay={handleNextDay}
							handlePrevDay={handlePrevDay}
						/>
					}
				/>
				<Route path="/" element={<Navigate to="/cooks" />} />
			</Routes>
		</Router>
	);
};

export default App;
