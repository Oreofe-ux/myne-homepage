import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiXMark } from "react-icons/hi2";
import "./Navbar.css";
import myneLogo from "../../assets/myne_logo_white_3.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <img className="logo" alt="MYNE logo" src={myneLogo} />

                {/* Mobile hamburger */}
                <button
                    className="menu-btn"
                    aria-label="Toggle navigation menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <HiXMark /> : <RxHamburgerMenu />}
                </button>

                {/* Desktop nav */}
                <div className="desktop-nav">
                    <ul className="desktop-nav-list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Why MYNE</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <button className="main-cta-button">Book a Demo</button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <ul className="mobile-nav-list">
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Why MYNE</a></li>
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Our Services</a></li>
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    </ul>
                    <button className="main-cta-button" onClick={() => setIsMenuOpen(false)}>
                        Book a Demo
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
