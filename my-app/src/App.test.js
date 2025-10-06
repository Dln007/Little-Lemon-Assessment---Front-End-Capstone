// App.test.js
import { render, screen } from "@testing-library/react";
import App, { initializeTimes, updateTimes } from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders the App component without crashing", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

test("initializeTimes returns non-empty array from fetchAPI", () => {
  const fetchSpy = jest
    .spyOn(window, "fetchAPI")
    .mockReturnValue(["17:00", "18:00", "19:00"]);

  const result = initializeTimes();

  expect(result.length).toBeGreaterThan(0);
  expect(result).toEqual(["17:00", "18:00", "19:00"]);

  fetchSpy.mockRestore();
});

test("updateTimes returns times for the given date", () => {
  const fetchSpy = jest
    .spyOn(window, "fetchAPI")
    .mockReturnValue(["20:00", "21:00"]);

  const mockDate = new Date("2025-10-17");
  const result = updateTimes([], { type: "UPDATE_TIMES", date: mockDate });

  expect(result).toEqual(["20:00", "21:00"]);

  fetchSpy.mockRestore();
});



