function BookingForm (){
    return (
        <form style={{ display: "grid", maxWidth: "320px", gap: "12px"}}>
            <label htmlFor="res-date">Choose Date</label>
            <input type="date" id="res-date"/>

            <label htmlFor="res-time">Choose Time</label>
            <select id="res-time">
                <option>0:00pm</option>
                <option>6:00pm</option>
                <option>7:00pm</option>
                <option>8:00pm</option>
                <option>9:00pm</option>
                <option>10:00pm</option>
            </select>

            <label htmlFor="guest">Number of Guests</label>
            <input type="number" id="guests" min={1} max={10} placeholder="1" />

            <label htmlFor="occasion">Occasion</label>
            <select id="occion">
                <option>Birthday</option>
                <option>Annaversary</option>
                <option>Engagement</option>
                <option>Wedding</option>
            </select>

            <button type="submit">Make Your Reservation!</button>
        </form>
    )
}

export default BookingForm;