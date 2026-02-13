import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#fef2f2', // Light red/pink background for warning
            color: '#991b1b', // Dark red text
            padding: '1rem',
            textAlign: 'center',
            borderTop: '1px solid #fee2e2',
            marginTop: 'auto', // Push to bottom if flex container
            fontSize: '0.9rem',
            fontWeight: '500'
        }}>
            <div className="container">
                <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    <strong>⚠ SYSTEM STATUS: DEVELOPMENT MODE [UNSECURED]</strong><br />
                    Traffic Encryption (SSL/TLS): <span style={{ color: '#dc2626' }}>INACTIVE</span>. Protocols pending deployment.<br />
                    Reverse Proxy: <span style={{ color: '#047857' }}>NGINX ACTIVE</span>.<br />
                    <em>Advisory: Do not transmit sensitive PII or credentials.</em>
                </p>
                <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(220, 38, 38, 0.2)', paddingTop: '0.5rem', fontSize: '0.8rem', color: '#7f1d1d' }}>
                    &copy; {new Date().getFullYear()} Momin Mushtaq
                </div>
            </div>
        </footer>
    );
};

export default Footer;
