export interface Destination {
    id: string;
    name: string;
    country: string;
    image: string;
    description: string;
    rating: number;
    popular: boolean;
}

export interface Package {
    id: string;
    title: string;
    destination: string;
    image: string;
    duration: string;
    price: number;
    rating: number;
    reviews: number;
    included: string[];
    featured: boolean;
}

export const destinations: Destination[] = [
    {
        id: 'd1',
        name: 'Bali',
        country: 'Indonesia',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
        description: 'Experience spiritual peace and stunning tropical landscapes.',
        rating: 4.8,
        popular: true
    },
    {
        id: 'd2',
        name: 'Santorini',
        country: 'Greece',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e',
        description: 'Breathtaking sunsets and iconic white-washed architecture.',
        rating: 4.9,
        popular: true
    },
    {
        id: 'd3',
        name: 'Kyoto',
        country: 'Japan',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
        description: 'Ancient temples, beautiful gardens, and traditional culture.',
        rating: 4.7,
        popular: true
    },
    {
        id: 'd4',
        name: 'Maldives',
        country: 'Maldives',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
        description: 'Luxury overwater bungalows and crystal clear waters.',
        rating: 4.9,
        popular: true
    }
];

export const packages: Package[] = [
    {
        id: 'p1',
        title: 'Ultimate Bali Escape',
        destination: 'Bali, Indonesia',
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd',
        duration: '7 Days',
        price: 1299,
        rating: 4.9,
        reviews: 128,
        included: ['Flights', '5★ Hotel', 'Breakfast', 'Tours'],
        featured: true
    },
    {
        id: 'p2',
        title: 'Romantic Santorini',
        destination: 'Santorini, Greece',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077',
        duration: '5 Days',
        price: 1899,
        rating: 4.8,
        reviews: 95,
        included: ['Ferry', 'Villa', 'Breakfast', 'Wine Tour'],
        featured: true
    },
    {
        id: 'p3',
        title: 'Swiss Alps Adventure',
        destination: 'Zermatt, Switzerland',
        image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95',
        duration: '6 Days',
        price: 2499,
        rating: 4.9,
        reviews: 210,
        included: ['Ski Pass', 'Resort', 'Meals', 'Gear'],
        featured: false
    },
    {
        id: 'p4',
        title: 'Maldives Luxury Retreat',
        destination: 'Male, Maldives',
        image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18',
        duration: '8 Days',
        price: 3599,
        rating: 5.0,
        reviews: 342,
        included: ['Flights', 'Overwater Villa', 'All Inclusive', 'Spa'],
        featured: true
    }
];
