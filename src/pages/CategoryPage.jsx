import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { services, categories } from '../data/mockData';
import { FaStar } from 'react-icons/fa';
import BookingModal from '../components/BookingModal';

const CategoryPage = () => {
    const { slug } = useParams();
    const categoryServices = services[slug];
    const categoryInfo = categories.find(c => c.slug === slug);
    const [selectedService, setSelectedService] = useState(null);

    if (!categoryInfo) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Category not found</h2>
                <p>Return to home to find what you need.</p>
            </div>
        )
    }

    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1 className="section-title">{categoryInfo.title} Services</h1>

            {!categoryServices ? (
                <p>No services available in this category yet.</p>
            ) : (
                <div className="service-list">
                    {categoryServices.map(service => (
                        <div key={service.id} className="service-card">
                            <div
                                className="service-image"
                                style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            ></div>
                            <div className="service-info">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                                    <h3 className="service-title">{service.title}</h3>
                                    <div className="service-rating">
                                        <FaStar /> {service.rating}
                                    </div>
                                </div>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                                    {service.description} ({service.reviews} reviews)
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span className="service-price">₹{service.price}</span>
                                    <button
                                        className="btn btn-primary"
                                        style={{ padding: '0.5rem 1rem' }}
                                        onClick={() => setSelectedService(service)}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {selectedService && (
                <BookingModal
                    service={selectedService}
                    onClose={() => setSelectedService(null)}
                />
            )}
        </div>
    );
};

export default CategoryPage;
