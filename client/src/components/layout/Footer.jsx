export default function Footer() {
    const footerStyle = {
        backgroundColor: 'var(--color-gray-50)',
        borderTop: '1px solid var(--color-gray-200)',
        marginTop: 'auto',
        padding: '3rem 0'
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
    };

    const copyrightStyle = {
        textAlign: 'center',
        marginTop: '2rem',
        paddingTop: '2rem',
        borderTop: '1px solid var(--color-gray-200)',
        color: 'var(--color-gray-600)'
    };

    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>CareerLink</h3>
                    <p style={{ color: 'var(--color-gray-600)' }}>
                        Connecting talent with opportunities.
                    </p>
                </div>

                <div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}><a href="/" style={{ color: 'var(--color-gray-600)', textDecoration: 'none' }}>Home</a></li>
                        <li style={{ marginBottom: '0.5rem' }}><a href="/jobs" style={{ color: 'var(--color-gray-600)', textDecoration: 'none' }}>Browse Jobs</a></li>
                        <li style={{ marginBottom: '0.5rem' }}><a href="/about" style={{ color: 'var(--color-gray-600)', textDecoration: 'none' }}>About Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Contact</h4>
                    <p style={{ color: 'var(--color-gray-600)', marginBottom: '0.5rem' }}>Email: info@careerlink.com</p>
                    <p style={{ color: 'var(--color-gray-600)' }}>Phone: +977 123-456-7890</p>
                </div>
            </div>

            <div style={copyrightStyle}>
                <p>&copy; {new Date().getFullYear()} CareerLink. All rights reserved.</p>
            </div>
        </footer>
    );
}
