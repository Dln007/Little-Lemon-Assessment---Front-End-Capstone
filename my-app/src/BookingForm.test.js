import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

beforeAll(() => { 
    window.alert = jest.fn();
});

test('Booking form can be submitted', () => {
    render(<BookingForm availableTimes={["5:00pm"]} dispatch={() => {}} />)


fireEvent.change(screen.getByLabelText(/Choose date/i), {
    target: {value: "2025-10-17"},
});

fireEvent.change(screen.getByLabelText(/choose a time/i), {
    target: {value: "5:00pm"},
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
expect(window.alert).toBeCalled();
});

test('Renders the Choose a time button', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const headingElement = screen.getByText("Choose a Time");
    expect(headingElement).toBeInTheDocument();
});



