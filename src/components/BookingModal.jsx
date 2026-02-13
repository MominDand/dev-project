import { useState } from 'react';
import { FaTimes, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const BookingModal = ({ service, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        address: '',
        name: '',
        phone: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(2); // Show success
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (!service) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{step === 1 ? 'Book Service' : 'Booking Confirmed'}</h3>
                    <button className="modal-close" onClick={onClose}><FaTimes /></button>
                </div>

                {step === 1 ? (
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>{service.title}</h4>
                            <p style={{ color: 'var(--accent)', fontWeight: 'bold' }}>₹{service.price}</p>
                        </div>

                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 500 }}><FaCalendarAlt /> Date</span>
                                    <input
                                        type="date"
                                        name="date"
                                        required
                                        style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 500 }}><FaClock /> Time</span>
                                    <input
                                        type="time"
                                        name="time"
                                        required
                                        style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>

                            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}><FaMapMarkerAlt /> Address</span>
                                <textarea
                                    name="address"
                                    required
                                    placeholder="Enter your full address"
                                    rows="3"
                                    style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', resize: 'none' }}
                                    onChange={handleChange}
                                ></textarea>
                            </label>

                            {/* Simple Name/Phone for "Login" simulation */}
                            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
                            Confirm Booking
                        </button>
                    </form>
                ) : (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div style={{
                            width: '80px', height: '80px', background: '#dcfce7', color: '#16a34a',
                            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '2.5rem', margin: '0 auto 1.5rem copy'
                        }}>
                            ✓
                        </div>
                        <h2 style={{ marginBottom: '1rem' }}>Success!</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Your booking for <strong>{service.title}</strong> has been confirmed for {formData.date} at {formData.time}.
                        </p>
                        <button className="btn btn-primary" onClick={onClose}>Done</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingModal;
