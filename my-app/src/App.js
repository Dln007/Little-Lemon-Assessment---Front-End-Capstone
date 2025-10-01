import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';

function App(){
  return(
    <div className='App'>
    <header>
      <Nav />
    </header>

    <main>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>

    <Footer />
    </div>
  )
}


export default App;
