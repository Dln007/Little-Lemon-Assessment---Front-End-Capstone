function Nav(){
    return(
        <nav aria-label="Primary">
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/orderOnline">Order Online</a></li>
            <li><a href="/logIn">Login</a></li>
        </ul>
        </nav>
    );
}

export default Nav;