import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  // Dummy booking data for exercise
  const bookingData = [
    { date: "2025-10-15", time: "17:00", guests: 2, occasion: "Birthday" },
    { date: "2025-10-15", time: "18:00", guests: 4, occasion: "Anniversary" },
    { date: "2025-10-15", time: "19:00", guests: 3, occasion: "Engagement" },
  ];

  return (
    <section>
      <h1>Reserve a Table</h1>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
        submitForm={submitForm} 
      />
     
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
