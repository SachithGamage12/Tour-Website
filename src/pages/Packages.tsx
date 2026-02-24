import PackageCard from '../components/packages/PackageCard';
import { packages } from '../data/mockData';

const Packages = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem', paddingBottom: '5rem', minHeight: '80vh' }}>
            <div className="container">

                <div className="section-header text-center" style={{ alignItems: 'center', marginBottom: '4rem' }}>
                    <div>
                        <span className="section-subtitle text-gold">Curated Journeys</span>
                        <h1 className="section-title" style={{ fontSize: '3rem' }}>Exclusive Tour Packages</h1>
                        <p className="text-secondary mt-4" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
                            Discover perfectly planned itineraries combining luxury, culture, and unforgettable experiences.
                        </p>
                    </div>
                </div>

                <div className="grid-layout packages-grid">
                    {packages.map(pkg => (
                        <PackageCard key={pkg.id} tourPackage={pkg} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Packages;
