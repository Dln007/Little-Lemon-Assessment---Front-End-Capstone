import { Link } from "react-router-dom";

function Hero(){
    return(
      <section className="hero">
        <h1>Welcome to Little Lemon!</h1>
        <p>Reserve a table and enjoy our delicious meals!</p>
        <Link to="/booking">
        <button>Reserve a table</button>
        </Link>
        {/* add image here*/}
      </section>
    );
}

export default Hero;