import { MapPin, Star } from 'lucide-react';
import type { Destination } from '../../data/mockData';
import './DestinationCard.css';

interface Props {
    destination: Destination;
}

const DestinationCard = ({ destination }: Props) => {
    return (
        <div className="destination-card">
            <div className="destination-image-wrapper">
                <img src={destination.image} alt={destination.name} className="destination-image" loading="lazy" />
                <div className="destination-rating bg-glass">
                    <Star size={14} className="text-gold fill-gold" />
                    <span>{destination.rating}</span>
                </div>
            </div>
            <div className="destination-content">
                <div className="destination-header">
                    <h3 className="destination-name">{destination.name}</h3>
                    <div className="destination-location">
                        <MapPin size={16} className="text-gold" />
                        <span>{destination.country}</span>
                    </div>
                </div>
                <p className="destination-desc">{destination.description}</p>
                <button className="btn btn-outline destination-btn">Explore</button>
            </div>
        </div>
    );
};

export default DestinationCard;
