// WaitersPage.js
import React from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
import { buttonDisable } from "../Utils/button-disable-logic";
import { PageContainer, ButtonContainer } from "./CooksPage";

const WaitersPage = ({ day, handleNextDay, handlePrevDay }) => {
	//    Created a reusable Button Component
	//    Created a reusable disable button logic

	const disableButton = buttonDisable(day);
	return (
		<>
			<Header title="Waiters" />
			<PageContainer>
			<h1>Waiters</h1>
			<h2>{day}</h2>
			<ul>
				<li>Waiter 1</li>
				<li>Waiter 2</li>
			</ul>
			<ButtonContainer>
			<Button
				title="Prev"
				eventHandler={handlePrevDay}
				disabled={disableButton === "prev"}
			/>
			<Button
				title="Next"
				eventHandler={handleNextDay}
				disabled={disableButton === "next"}
			/>
			</ButtonContainer>
			</PageContainer>
		</>
	);
};

export default WaitersPage;
