import { initializeTimes, updateTimes } from "./App";

test('initializeTimes returns the correct times array', () => {
  const times = initializeTimes();
  expect(times).toEqual(["5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm"]);
 });

 test ('updateTimes  returns the same state it was passed in', () => {
  const state = ["5:00pm", "6:00pm"]
  const action = {type: "update_times", date: "2025-10-17"};
  const newState = updateTimes(state, action);
  expect(newState).toEqual(state);
 });