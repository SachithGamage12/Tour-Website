import { MapPin, Star, Clock, Check } from 'lucide-react';
import type { Package } from '../../data/mockData';
import './PackageCard.css';

interface Props {
    tourPackage: Package;
}

const PackageCard = ({ tourPackage }: Props) => {
    return (
        <div className="package-card">
            <div className="package-image-wrapper">
                <img src={tourPackage.image} alt={tourPackage.title} className="package-image" loading="lazy" />
                {tourPackage.featured && (
                    <div className="package-badge bg-glass text-gold">Featured</div>
                )}
            </div>
            <div className="package-content">
                <div className="package-meta">
                    <div className="package-location">
                        <MapPin size={14} className="text-gold" />
                        <span>{tourPackage.destination}</span>
                    </div>
                    <div className="package-duration">
                        <Clock size={14} className="text-gold" />
                        <span>{tourPackage.duration}</span>
                    </div>
                </div>

                <h3 className="package-title">{tourPackage.title}</h3>

                <div className="package-rating">
                    <Star size={14} className="text-gold fill-gold" />
                    <span className="rating-score">{tourPackage.rating}</span>
                    <span className="rating-reviews">({tourPackage.reviews} reviews)</span>
                </div>

                <div className="package-includes">
                    {tourPackage.included.slice(0, 3).map((item, index) => (
                        <div key={index} className="include-item">
                            <Check size={12} className="text-gold" />
                            <span>{item}</span>
                        </div>
                    ))}
                    {tourPackage.included.length > 3 && (
                        <span className="include-more">+{tourPackage.included.length - 3} more</span>
                    )}
                </div>

                <div className="package-footer">
                    <div className="package-price">
                        <span className="price-label">From</span>
                        <span className="price-value">${tourPackage.price}</span>
                    </div>
                    <button className="btn btn-primary package-btn">Book Details</button>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
