import DestinationCard from '../components/destinations/DestinationCard';
import { destinations } from '../data/mockData';

const Destinations = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem', paddingBottom: '5rem', minHeight: '80vh' }}>
            <div className="container">

                <div className="section-header text-center" style={{ alignItems: 'center', marginBottom: '4rem' }}>
                    <div>
                        <span className="section-subtitle text-gold">Global Database</span>
                        <h1 className="section-title" style={{ fontSize: '3rem' }}>All Destinations</h1>
                        <p className="text-secondary mt-4" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
                            Browse our complete collection of hand-picked premium destinations around the globe.
                        </p>
                    </div>
                </div>

                <div className="grid-layout destinations-grid">
                    {destinations.map(destination => (
                        <DestinationCard key={destination.id} destination={destination} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Destinations;
