import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
import userEvent from "@testing-library/user-event";

test('Booking form can be submitted', () => {
    const mockSubmit = jest.fn();
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={mockSubmit}/>);


fireEvent.change(screen.getByLabelText(/Choose date/i), {
    target: {value: "2025-10-17"},
});

fireEvent.change(screen.getByLabelText(/choose a time/i), {
    target: {value: "17:00"},
});

fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: {value: "2"},
});

fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: {value: "Birthday"},
});

fireEvent.click(
    screen.getByRole("button", {name: /make your reservation/i})
);
expect(mockSubmit).toBeCalled();
});

test('Renders the Choose a time button', () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={() => {}} />);
    const headingElement = screen.getByText("Choose a Time");
    expect(headingElement).toBeInTheDocument();
});

test('Date input has requirements and min attributes', () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() =>{}}/>);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("min");
});

test("Guest input enforces min and max", () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={() => {}} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
});

test("Submit button is disabled when form is invalid", () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() =>{}}/>);
    const submitButton = screen.getByRole("button", {name: /make your reservation/i});
    expect(submitButton).toBeDisabled(); //Button should start disabled
});

test ("Submit button is enabled when form is valid", async () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={() => {}} />);

    const dateInput = screen.getByLabelText(/choose date/i)
    const timeSelect = screen.getByLabelText(/choose a time/i)
    const guestsInput = screen.getByLabelText(/number of guests/i)
    const occasionSelect = screen.getByLabelText(/occasion/i)

    await userEvent.type (dateInput, "2025-10-17");
    await userEvent.selectOptions (timeSelect, "17:00");
    userEvent.clear (guestsInput);
    await userEvent.type (guestsInput, "4")
    await userEvent.selectOptions (occasionSelect, "Birthday")

    const submitButton = screen.getByRole("button", {name: /make your reservation/i});
    expect(submitButton).toBeEnabled();

});

test ("Form submission calls for submitForm with correct data", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={mockSubmit}/>);

    await userEvent.type(screen.getByLabelText(/choose date/i), "2025-10-17");
    await userEvent.selectOptions(screen.getByLabelText(/choose a time/i), "17:00")
    await userEvent.clear (screen.getByLabelText(/number of guests/i));
    await userEvent.type (screen.getByLabelText(/number of guests/i), "2");
    await userEvent.selectOptions (screen.getByLabelText(/occasion/i), "Anniversary");

    await userEvent.click (screen.getByRole("button", {name: /make your reservation/i}));

    expect (mockSubmit).toHaveBeenCalledWith({
        date:"2025-10-17",
        time: "17:00",
        guests: 2,
        occasion: "Anniversary"
    })

})



