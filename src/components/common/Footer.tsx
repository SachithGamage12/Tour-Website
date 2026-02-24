import { Compass, Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-glass">
            <div className="container footer-container">

                {/* Brand & Description */}
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <Compass className="text-gold" size={32} />
                        <span className="logo-text">Aura<span className="text-gold">Travel</span></span>
                    </Link>
                    <p className="footer-description">
                        Experience the world's most breathtaking destinations with our premium curated travel packages.
                        Luxury, adventure, and unforgettable memories await.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h4 className="footer-heading">Explore</h4>
                    <ul className="footer-list">
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Link to="/packages">Tour Packages</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div className="footer-links">
                    <h4 className="footer-heading">Support</h4>
                    <ul className="footer-list">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-contact">
                    <h4 className="footer-heading">Contact Us</h4>
                    <ul className="footer-list">
                        <li className="contact-item">
                            <MapPin size={18} className="text-gold" />
                            <span>123 Horizon Ave, Suite 200<br />London, UK W1D 3QU</span>
                        </li>
                        <li className="contact-item">
                            <Phone size={18} className="text-gold" />
                            <span>+44 20 7946 0958</span>
                        </li>
                        <li className="contact-item">
                            <Mail size={18} className="text-gold" />
                            <span>support@auratravel.com</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Aura Travel. copyright claim by Sachith Gamage.</p>
            </div>
        </footer>
    );
};

export default Footer;
