// CooksPage.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Button from "../Components/Button";
import { buttonDisable } from "../Utils/button-disable-logic";
import { capitalizeFirstLetter } from "../Utils/capitalize-first-letter";

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	font-family: "Roboto", sans-serif;
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 10px;
`;

const CooksPage = ({ day, handleNextDay, handlePrevDay }) => {
	const [cooks, setCooks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
  
	useEffect(() => {
	  // Function to fetch waiters data from the backend API
	  const fetchWaiters = async () => {
		try {
		  const response = await fetch("http://localhost:8000/GetCooks");
		  if (!response.ok) {
			throw new Error("Failed to fetch data from the server");
		  }
		  const data = await response.json();
		  // Assuming the API returns an array of waiters for the given day
		  setCooks(data[0][day]);		  
		  setIsLoading(false);
		} catch (error) {		  
		  setError("Failed to Load Data");
		  setIsLoading(false);
		}
	  };  
	  fetchWaiters();
	}, [day]);
  
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
		<Header title="Cooks" />
		<PageContainer>
		  <h1>Cooks</h1>
		  <h2>{capitalizeFirstLetter(day)}</h2>
		  <ul>
			{cooks.map((waiter, index) => (
			  <li key={index}>{waiter}</li>
			))}
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