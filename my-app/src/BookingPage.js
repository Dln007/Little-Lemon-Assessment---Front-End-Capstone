import BookingForm from "./BookingForm";

function BookingPage({availableTimes, dispatch}){

    return(
        <section>
            <h1>Reserve a Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </section>
    )
}

export default BookingPage;