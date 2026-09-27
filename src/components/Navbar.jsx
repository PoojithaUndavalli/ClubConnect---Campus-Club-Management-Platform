import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <header className="navbar">

            <div className="logo">
                <p>Clubs<span>Connect</span></p>
            </div>


            <nav>

                <NavLink to="/">
                    Home
                </NavLink>

                <NavLink to="/clubs">
                    Clubs
                </NavLink>

                <NavLink to="/events">
                    Events
                </NavLink>

                <NavLink to="/recruitments">
                    Recruitments
                </NavLink>

            </nav>

        </header>
    );
}

export default Navbar;