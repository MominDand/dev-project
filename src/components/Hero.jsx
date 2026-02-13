import { FaSearch } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1>Home services at your<br /> <span style={{ color: 'var(--accent)' }}>fingertips</span></h1>
                <p>Get expert professionals for cleaning, repair, painting, and more.</p>

                <div className="search-bar">
                    <FaSearch size={20} color="gray" style={{ margin: 'auto 0' }} />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for 'AC Repair', 'Painting'..."
                    />
                </div>
            </div>

            {/* Abstract decorative circles using inline styles for simplicity */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '400px',
                height: '400px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                right: '-10%',
                width: '300px',
                height: '300px',
                background: 'rgba(245, 158, 11, 0.1)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }}></div>
        </section>
    );
};

export default Hero;
