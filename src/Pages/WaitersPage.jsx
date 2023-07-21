import React from "react";
import Button from "../Components/Button";
import { buttonDisable } from "../Utils/button-disable-logic";
import { StyledPageContainer, StyledButtonContainer, StyledUl } from "./CooksPage";
import { capitalizeFirstLetter } from "../Utils/capitalize-first-letter";
import useHttp from "../Hooks/useHttp";

const WaitersPage = ({ day, handleNextDay, handlePrevDay }) => {
	const url = "http://localhost:8000/GetWaiters";
	const { data: waiters, isLoading, error } = useHttp(url, day);

	const disableButton = buttonDisable(day);

	// Created a Loading message to give the User some feedback
	if (isLoading) {
		return <div>Loading...</div>; // Show a loading message while waiting for the response
	}

	// Created a Error message to give the User that there is an error
	if (error) {
		return <div>{error}</div>; // Show "Failed to Load Data" message in case of an error
	}
	return (
		<>			
			<StyledPageContainer>
				<h1>Waiters</h1>
				<h2>{capitalizeFirstLetter(day)}</h2>
				<StyledUl>
					{waiters?.map((waiter, index) => (
						<li key={index}>{waiter}</li>
					))}
				</StyledUl>
				<StyledButtonContainer>
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
				</StyledButtonContainer>
			</StyledPageContainer>
		</>
	);
};

export default WaitersPage;
