import { useState } from "react";

function BookingForm ({availableTimes, dispatch}){

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({date, time, guests, occasion});
        alert(`Reservation has been made: ${guests} guests on ${date} at ${time} for ${occasion}`);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "320px", gap: "12px"}}>
            <label htmlFor="res-date">Choose Date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => {
                const selectedDate = e.target.value;
                setDate(selectedDate);
                dispatch ({type: "update_items", date: selectedDate});
            }} required/>

            <label htmlFor="res-time">Choose a Time</label>
            <select id="res-time" value={time} onChange={(e) => setTime (e.target.value)} required>
                <option value={""}>Select a time</option>
                {availableTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of Guests</label>
            <input type="number" id="guests" min={1} max={10} value={guests} onChange={(e) => setGuests(e.target.value)} required />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>Wedding</option>
            </select>

            <button type="submit">Make Your Reservation!</button>
        </form>
    )
}

export default BookingForm;