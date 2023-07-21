import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import CooksPage from "./CooksPage";

// These tests are looking for key words in the app and also testing the button functions

describe("CooksPage tests", () => {
it("renders Loading... message on initial loading", async () => {
	render(<CooksPage />);
	const loadingMessage = await screen.findByText("Loading...");
	expect(loadingMessage).toBeInTheDocument();
});

it("renders Cooks header as a page title", async () => {
	render(<CooksPage />);
	const pageTitle = await screen.findByText("Cooks");
	expect(pageTitle).toBeInTheDocument();
});

it("disables Prev button when selected day is Monday", async () => {
	render(<CooksPage day="monday" />);
	const prevButton = await screen.findByText("Prev");
	expect(prevButton).toBeDisabled();
});

it("disables Next button when selected day is Friday", async () => {
	render(<CooksPage day="friday" />);
	const nextButton = await screen.findByText("Next");
	expect(nextButton).toBeDisabled();
})
});