// CooksPage.js
import React from "react";
import styled from 'styled-components';
import Header from "../Components/Header";
import Button from "../Components/Button";
import { buttonDisable } from "../Utils/button-disable-logic";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const CooksPage = ({ day, handleNextDay, handlePrevDay }) => {
	//    Created a reusable Button Component
	//    Created a reusable disable button logic

	const disableButton = buttonDisable(day);
	return (
		<>
			<Header title="Cooks" />
			<PageContainer>
			<h1>Cooks</h1>
			<h2>{day}</h2>
			{/* Display cooks list for the specific day */}
			{/* Replace this with your actual implementation */}
			<ul>
				<li>Cook 1</li>
				<li>Cook 2</li>
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

export default CooksPage;
