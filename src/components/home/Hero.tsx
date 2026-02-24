import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/destinations');
    };

    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <div className="hero-text animate-fade-in">
                    <span className="hero-subtitle text-gold">Elevate Your Journey</span>
                    <h1 className="hero-title">
                        Discover The World's Most <br />
                        <span className="text-gold">Extraordinary</span> Destinations
                    </h1>
                    <p className="hero-description text-secondary">
                        Experience uncompromised luxury and bespoke adventures carefully curated for the modern traveler.
                        Your next unforgettable story begins with AuraTravel.
                    </p>
                </div>

                {/* Search Bar */}
                <form className="search-bar bg-glass animate-fade-in" style={{ animationDelay: '0.2s' }} onSubmit={handleSearch}>
                    <div className="search-group">
                        <MapPin className="text-gold" size={24} />
                        <div className="search-input-wrapper">
                            <label>Location</label>
                            <input type="text" placeholder="Where to?" />
                        </div>
                    </div>
                    <div className="search-divider"></div>
                    <div className="search-group">
                        <Calendar className="text-gold" size={24} />
                        <div className="search-input-wrapper">
                            <label>Date</label>
                            <input type="date" style={{ colorScheme: 'dark' }} required />
                        </div>
                    </div>
                    <div className="search-divider"></div>
                    <div className="search-group">
                        <Users className="text-gold" size={24} />
                        <div className="search-input-wrapper">
                            <label>Guests</label>
                            <input type="text" placeholder="How many?" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary search-btn">
                        <Search size={20} />
                        <span>Search</span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Hero;
