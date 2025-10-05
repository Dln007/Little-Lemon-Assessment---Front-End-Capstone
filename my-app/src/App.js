import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Nav from './Nav';
import Footer from './Footer';

import HomePage from './HomePage';
import BookingPage from './BookingPage';

export function initializeTimes(){
    return ["5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm"];
  }

  export function updateTimes(state, action){
    if (action.type === "update_times") {
      console.log ("Date selected:", action.date)

      // To Do: Replace with real logic for available items

      return state;
    }
    return state;
  }

  const initializeTimes = () => {
    const today = new Date();
    return fetchAPI (today);
  }

  const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES' ) {
      return fetchAPI (new Date (action.date));
    }
    return state;
  }

function App(){

  const [availableTimes, dispatch] = useReducer (updateTimes, [], initializeTimes)

  return(
    <BrowserRouter>
    <div className='App'>
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Booking" element={<BookingPage availableTimes = {availableTimes}  dispatch = {dispatch} />} />
        </Routes>
      </main>

      <Footer />

    </div>
    </BrowserRouter>
  )
}


export default App;
