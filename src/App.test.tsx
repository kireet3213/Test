import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
	it("should work", () => {
		expect(1).toBe(1);
	});
	it("should have vite template", () => {
		const { getByText } = render(<App />);
		const element = getByText("Vite + React");
		expect(element).toBeInTheDocument();
	});
});
