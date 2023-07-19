// Function to get the day when next or previous buttons are clicked
export const getAdjacentDay = (currentDay, direction) => {
	const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	const currentIndex = days.indexOf(currentDay);
	let adjacentIndex;

	if (direction === "previous") {
		adjacentIndex = currentIndex - 1;
	} else if (direction === "next") {
		adjacentIndex = currentIndex + 1;
	}

	return days[adjacentIndex];
};
