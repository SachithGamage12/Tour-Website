import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/destinations', label: 'Destinations' },
        { path: '/packages', label: 'Packages' },
    ];

    return (
        <header className={`header ${isScrolled ? 'header-scrolled bg-glass' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <Globe className="logo-icon text-gold" size={32} />
                    <span className="logo-text">World<span className="text-gold">Tour</span></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-primary">Book Now</button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="mobile-nav bg-glass">
                    <ul className="mobile-nav-list">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button className="btn btn-primary w-full mt-4">Book Now</button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
