/* global fetchAPI, submitAPI */
import { useReducer } from 'react';
import{fetchAPI, submitAPI} from  "./api"

import './App.css';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"

import Nav from './Nav';
import Footer from './Footer';

import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

  const initializeTimes = () => {
    const today = new Date();
    return window.fetchAPI (today);
  }

  const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES' ) {
      return window.fetchAPI (new Date (action.date));
    }
    return state;
  }

function App(){

  const [availableTimes, dispatch] = useReducer (updateTimes, [], initializeTimes)
  const navigate = useNavigate();

  function submitForm (formData) {
    const success =  window.submitAPI(formData)
    if (success) {
      navigate ("/confirmed");
    };
  }

  return(
    <div className='App'>
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Booking" element={<BookingPage availableTimes = {availableTimes}  dispatch = {dispatch} submitForm = {submitForm} />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App;
export {initializeTimes, updateTimes};
