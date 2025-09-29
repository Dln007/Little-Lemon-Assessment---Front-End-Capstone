import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonails';
import About from './About';
import Footer from './Footer';

function App(){
  return(
    <>
    <header>
      <Nav />
      <Hero />
    </header>

    <main>
      <Highlights />
      <Testimonials />
      <About />
    </main>

    <Footer />
    </>
  )
}


export default App;
