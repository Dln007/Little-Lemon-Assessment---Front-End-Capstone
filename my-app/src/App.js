/* global fetchAPI, submitAPI */
import { useReducer } from 'react';

import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Nav from './Nav';
import Footer from './Footer';

import HomePage from './HomePage';
import BookingPage from './BookingPage';

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
