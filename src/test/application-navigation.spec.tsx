import "jest-canvas-mock";
import App from "../App";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

describe("Application navigation", () => {
	it("Should open the application", () => {
		render(
			<AuthProvider>
				<MemoryRouter>
					<App />
				</MemoryRouter>
			</AuthProvider>
		);
	});
});
