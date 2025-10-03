import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Nav from './Nav';
import Footer from './Footer';

import HomePage from './HomePage';
import BookingPage from './BookingPage';

function App(){
  return(
    <BrowserRouter>
    <div className='App'>
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Booking" element={<BookingPage />} />
        </Routes>
      </main>

      <Footer />

    </div>
    </BrowserRouter>
  )
}


export default App;
