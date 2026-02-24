import Hero from '../components/home/Hero';
import DestinationCard from '../components/destinations/DestinationCard';
import PackageCard from '../components/packages/PackageCard';
import { destinations, packages } from '../data/mockData';
import './Home.css';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            {/* Featured Destinations Section */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <span className="section-subtitle text-gold">Explore The World</span>
                            <h2 className="section-title">Popular Destinations</h2>
                        </div>
                        <Link to="/destinations" className="btn btn-outline section-link">
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid-layout destinations-grid mt-4">
                        {destinations.filter(d => d.popular).slice(0, 4).map(destination => (
                            <DestinationCard key={destination.id} destination={destination} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Packages Section */}
            <section className="section bg-darker">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <span className="section-subtitle text-gold">Curated Experiences</span>
                            <h2 className="section-title">Exclusive Packages</h2>
                        </div>
                        <Link to="/packages" className="btn btn-outline section-link">
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid-layout packages-grid mt-4">
                        {packages.filter(p => p.featured).slice(0, 3).map(pkg => (
                            <PackageCard key={pkg.id} tourPackage={pkg} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="section newsletter-section">
                <div className="container">
                    <div className="newsletter-box bg-glass">
                        <div className="newsletter-content">
                            <h2 className="newsletter-title">Get Special Offers</h2>
                            <p className="newsletter-desc text-secondary">Subscribe to our newsletter and receive exclusive deals on premium tours.</p>
                        </div>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter your email address" className="newsletter-input" />
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
