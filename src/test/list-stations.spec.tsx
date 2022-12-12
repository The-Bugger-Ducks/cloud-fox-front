import "jest-canvas-mock";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import App from "../App";
import PrivilegedUsers from "../pages/PrivilegedUsers";
import { api } from "../services/api";
import { ActiveStationInterface } from "../interfaces/station";

describe("Application navigation", () => {
	test("Should open the application", async () => {
		let canAccess = false;

		const response = await api.get<ActiveStationInterface[]>("/stations")

		if (response.data.length > 0) canAccess = true

		expect(canAccess).toEqual(true);
	});
});
