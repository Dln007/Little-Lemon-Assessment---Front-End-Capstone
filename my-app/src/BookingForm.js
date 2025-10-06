import { useState } from "react";

import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch }) {
  // Dummy booking data for exercise
  const bookingData = [
    { date: "2025-10-15", time: "5:00pm", guests: 2, occasion: "Birthday" },
    { date: "2025-10-15", time: "6:00pm", guests: 4, occasion: "Anniversary" },
    { date: "2025-10-15", time: "7:00pm", guests: 3, occasion: "Engagement" },
  ];

  return (
    <section>
      <h1>Reserve a Table</h1>
      
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />

     
      <h2>Existing Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Occasion</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((booking, index) => (
            <tr key={index}>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.guests}</td>
              <td>{booking.occasion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default BookingPage;
