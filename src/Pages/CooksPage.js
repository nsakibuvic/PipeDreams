// CooksPage.js
import React, { useState } from "react";
import Header from "../Components/Header";

const CooksPage = () => {
	const [day, setDay] = useState("Tuesday"); // Default day is Tuesday for demonstration

	const handlePrevDay = () => {
		// Logic to handle previous day
		// Ensure day does not go below Monday
		// You can adjust this logic based on your specific requirements
		if (day === "Monday") return;
		setDay(getPreviousDay(day));
	};

	const handleNextDay = () => {
		// Logic to handle next day
		// Ensure day does not go beyond Friday
		// You can adjust this logic based on your specific requirements
		if (day === "Friday") return;
		setDay(getNextDay(day));
	};

	return (
		<div>
			<Header title="Cooks"/>
			<h1>Cooks</h1>
			<h2>{day}</h2>
			{/* Display cooks list for the specific day */}
			{/* Replace this with your actual implementation */}
			<ul>
				<li>Cook 1</li>
				<li>Cook 2</li>
			</ul>
			<button onClick={handlePrevDay} disabled={day === "Monday"}>
				Prev
			</button>
			<button onClick={handleNextDay} disabled={day === "Friday"}>
				Next
			</button>
		</div>
	);
};

const getPreviousDay = (currentDay) => {
	// Logic to get previous day based on currentDay
	// You can adjust this logic based on your specific requirements
	const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	const currentIndex = days.indexOf(currentDay);
	const previousIndex = currentIndex - 1;
	return days[previousIndex];
};

const getNextDay = (currentDay) => {
	// Logic to get next day based on currentDay
	// You can adjust this logic based on your specific requirements
	const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	const currentIndex = days.indexOf(currentDay);
	const nextIndex = currentIndex + 1;
	return days[nextIndex];
};

export default CooksPage;
