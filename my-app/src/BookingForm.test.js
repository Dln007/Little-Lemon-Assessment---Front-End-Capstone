import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Booking form can be submitted', () => {
    const mockSubmit = jest.fn();
    render(<BookingForm availableTimes={["5:00pm"]} dispatch={() => {}} submitForm={mockSubmit}/>)


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
    render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
    const headingElement = screen.getByText("Choose a Time");
    expect(headingElement).toBeInTheDocument();
});



