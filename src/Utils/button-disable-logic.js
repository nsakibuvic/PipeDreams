// Function to disable button
export const buttonDisable = (day) => {
	if (day === "Monday") {
		return "prev";
	} else if (day === "Friday") {
		return "next";
	} else {
		return "";
	}
};
