import "./footer.css";
import myneLogo from "../../assets/myne_logo_white_3.png";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Why MYNE", href: "#" },
    { label: "Our Services", href: "#" },
    { label: "Contact", href: "#" },
];

const services = [
    "Market Intelligence",
    "Asset Management",
    "Risk Assessment",
    "Investment Scoring",
];

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand column */}
                    <div className="footer-brand">
                        <img src={myneLogo} alt="MYNE logo" className="footer-logo" />
                        <p className="footer-tagline">
                            Real estate data intelligence and asset management for developers, investors, and institutions across Africa.
                        </p>
                        <div className="footer-socials">
                            <a href="https://www.instagram.com/myne2live" aria-label="Instagram" className="social-link">📸</a>
                            <a href="https://www.facebook.com/profile.php?id=61590748925500" aria-label="Facebook" className="social-link">f</a>
                        </div>
                    </div>

                    {/* Pages */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Pages</h4>
                        <ul className="footer-links">
                            {navLinks.map((link, i) => (
                                <li key={i}><a href={link.href}>{link.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Services</h4>
                        <ul className="footer-links">
                            {services.map((s, i) => (
                                <li key={i}><a href="#">{s}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Contact</h4>
                        <ul className="footer-links footer-contact">
                            <li>myne2live@gmail.com</li>
                            <li>+234 812 686 0989</li>
                            <li>Lagos, Nigeria</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} MYNE. All rights reserved.</p>
                    <a href="#" className="footer-policy">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
