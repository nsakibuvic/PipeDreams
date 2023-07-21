// CooksPage.js
import React from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import { buttonDisable } from "../Utils/button-disable-logic";
import { capitalizeFirstLetter } from "../Utils/capitalize-first-letter";
import useHttp from "../Hooks/useHttp";

export const StyledPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	font-family: "Roboto", sans-serif;
`;

export const StyledButtonContainer = styled.div`
	display: flex;
	gap: 10px;
`;
export const StyledUl = styled.ul`
	margin-bottom: 40px;
`;

const CooksPage = ({ day, handleNextDay, handlePrevDay }) => {
	const url = "http://localhost:8000/GetCooks";

	const { data: cooks, isLoading, error } = useHttp(url, day);
	//    Created a reusable Button Component
	//    Created a reusable disable button logic
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
				<h1>Cooks</h1>
				<h2>{capitalizeFirstLetter(day)}</h2>
				<StyledUl>
					{cooks?.map((waiter, index) => (
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

export default CooksPage;
