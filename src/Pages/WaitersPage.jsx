import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
import { buttonDisable } from "../Utils/button-disable-logic";
import { PageContainer, ButtonContainer } from "./CooksPage";
import { capitalizeFirstLetter } from "../Utils/capitalize-first-letter";

const WaitersPage = ({ day, handleNextDay, handlePrevDay }) => {
  // State to store the waiters data
  const [waiters, setWaiters] = useState([]);

  useEffect(() => {
    // Function to fetch waiters data from the backend API
    const fetchWaiters = async () => {
      try {
        const response = await fetch("http://localhost:8000/GetWaiters");
        const data = await response.json();
        // Assuming the API returns an array of waiters for the given day
        setWaiters(data[0][day]);
      } catch (error) {
        console.error("Error fetching waiters data:", error);
      }
    };

    fetchWaiters();
  }, [day]);

  const disableButton = buttonDisable(day);

  return (
    <>
      <Header title="Waiters" />
      <PageContainer>
        <h1>Waiters</h1>
        <h2>{capitalizeFirstLetter(day)}</h2>
        <ul>
          {waiters.map((waiter, index) => (
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

export default WaitersPage;