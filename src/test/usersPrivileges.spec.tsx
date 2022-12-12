import "jest-canvas-mock";
import React from "react";
import { queryAllByText, queryByAttribute, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import App from "../App";
import PrivilegedUsers from "../pages/PrivilegedUsers";
import { api } from "../services/api";
import { ActiveStationInterface } from "../interfaces/station";

describe("Application navigation", () => {
	it("Should open the application", async () => {
		const { getByTestId } = render(<PrivilegedUsers />);
		expect(getByTestId('content')).toBeInTheDocument;
	});
});
