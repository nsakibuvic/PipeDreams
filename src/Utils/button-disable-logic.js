// Function to disable button
export const buttonDisable = (day) => {
	if (day === "monday") {
		return "prev";
	} else if (day === "friday") {
		return "next";
	} else {
		return "";
	}
};
