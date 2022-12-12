import { api } from "../services/api";

describe("API connection", () => {
	test("Should not access a route that does not exist", async () => {
		let canAccess = false;

		await api
			.get("/notFoundRoute")
			.then(() => (canAccess = true))
			.catch(() => (canAccess = false));

		expect(canAccess).toEqual(false);
	});

	test("Should access an exists route", async () => {
		let canAccess = false;

		await api
			.get("/stations")
			.then(() => (canAccess = true))
			.catch(() => (canAccess = false));

		expect(canAccess).toEqual(true);
	});
});
