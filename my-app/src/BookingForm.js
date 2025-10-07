import { useEffect, useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isFormValid, setIsFormValid] = useState (false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData); 
  };

  useEffect (() => {
    const valid = date && time && guests >=1 && guests <=10 && occasion !=="";
    setIsFormValid (valid);
  }, [date, time, guests, occasion]);

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "320px", gap: "12px" }}>
      <label htmlFor="res-date">Choose Date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          const selectedDate = e.target.value;
          setDate(selectedDate);
          dispatch({ type: "UPDATE_TIMES", date: selectedDate });
        }}
        required
        min={new Date().toISOString().split("T")[0]} // ensures no past dates are selected
      />

      <label htmlFor="res-time">Choose a Time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        id="guests"
        min={1}
        max={10}
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option aria-label="Select An Occasion" value="">Select An Occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Wedding</option>
      </select>

      <button aria-label="Make Your Reservation!" type="submit" disabled={!isFormValid}>Make Your Reservation!</button>
    </form>
  );
}

export default BookingForm;

