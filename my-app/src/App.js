import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { act, useReducer } from 'react';

import Nav from './Nav';
import Footer from './Footer';

import HomePage from './HomePage';
import BookingPage from './BookingPage';

function App(){

  function initializeTimes(){
    return ["5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm"];
  }

  function updateTimes(state, action){
    if (action.type === "update-times") {
      console.log ("Date selected:", action.date)

      // To Do: Replace with real logic for available items

      return state;
    }
    return state;
  }

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
