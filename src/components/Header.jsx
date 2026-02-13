import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaSearch, FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <Link to="/" className="logo">
                        Kashmir<span style={{ color: 'var(--accent)' }}>Services</span>
                    </Link>

                    <div className="nav-links">
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <FaMapMarkerAlt /> Kashmir
                        </span>
                        <Link to="#">Services</Link>
                        <Link to="#">Blog</Link>
                    </div>

                    <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaUser /> Login / Sign Up
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
