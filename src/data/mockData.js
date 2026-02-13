export const categories = [
    {
        id: 'cleaning',
        title: 'Cleaning',
        icon: '🧹',
        slug: 'cleaning',
        description: 'Spotless home in no time'
    },
    {
        id: 'electrician',
        title: 'Electrician',
        icon: '⚡',
        slug: 'electrician',
        description: 'Expert electrical repairs'
    },
    {
        id: 'plumber',
        title: 'Plumber',
        icon: '🔧',
        slug: 'plumber',
        description: 'Fix leaks and pipes'
    },
    {
        id: 'carpenter',
        title: 'Carpenter',
        icon: '🪚',
        slug: 'carpenter',
        description: 'Custom furniture and repairs'
    },
    {
        id: 'painter',
        title: 'Painter',
        icon: '🎨',
        slug: 'painter',
        description: 'Wall painting & decor'
    },
    {
        id: 'salon',
        title: 'Salon & Spa',
        icon: '💇‍♀️',
        slug: 'salon',
        description: 'Beauty services at home'
    }
];

export const services = {
    cleaning: [
        {
            id: 'c1',
            title: 'Deep Home Cleaning',
            price: 1499,
            rating: 4.8,
            reviews: 120,
            image: 'https://images.unsplash.com/photo-1581578731117-104f2a417954?auto=format&fit=crop&q=80&w=800',
            description: 'Complete home deep cleaning including floor, kitchen, and bathroom.'
        },
        {
            id: 'c2',
            title: 'Bathroom Cleaning',
            price: 499,
            rating: 4.7,
            reviews: 85,
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
            description: 'Intensive cleaning for bathrooms.'
        }
    ],
    electrician: [
        {
            id: 'e1',
            title: 'Fan Repair',
            price: 199,
            rating: 4.9,
            reviews: 300,
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
            description: 'Repairing ceiling and exhaust fans.'
        },
        {
            id: 'e2',
            title: 'Switchboard Installation',
            price: 299,
            rating: 4.6,
            reviews: 50,
            image: 'https://images.unsplash.com/photo-1558402529-d2638a7023e9?auto=format&fit=crop&q=80&w=800',
            description: 'Installation of new switchboards.'
        }
    ],
    carpenter: [
        {
            id: 'cp1',
            title: 'Furniture Assembly',
            price: 399,
            rating: 4.7,
            reviews: 45,
            image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800',
            description: 'Assembling beds, tables, and chairs.'
        }
    ]
    // Add more as needed
};
