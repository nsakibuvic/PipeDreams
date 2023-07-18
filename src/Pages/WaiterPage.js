// WaitersPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

const WaitersPage = () => {
  const currentDay = 'Tuesday'; // Assume the current day is Tuesday

  return (
    <div>
      <Header title="Waiters"/>
      <h1>Waiters</h1>
      <h2>{currentDay}</h2>
      {/* Display waiters list for the specific day */}
      {/* Replace this with your actual implementation */}
      <ul>
        <li>Waiter 1</li>
        <li>Waiter 2</li>
      </ul>
      <Link to="/cooks">Cooks</Link>
    </div>
  );
};

export default WaitersPage;