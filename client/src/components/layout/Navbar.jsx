import { Link } from 'react-router-dom';

const navStyles = {
    nav: {
        backgroundColor: 'white',
        boxShadow: 'var(--shadow-sm)',
        borderBottom: '1px solid var(--color-gray-200)'
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        height: '64px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'var(--color-primary)',
        textDecoration: 'none'
    },
    links: {
        display: 'flex',
        gap: '2rem'
    },
    link: {
        color: 'var(--color-gray-700)',
        textDecoration: 'none',
        fontWeight: '500'
    },
    actions: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
    },
    signIn: {
        color: 'var(--color-primary)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '500'
    },
    signUp: {
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '500'
    }
};

export default function Navbar() {
    return (
        <nav style={navStyles.nav}>
            <div style={navStyles.container}>
                <div>
                    <Link to="/" style={navStyles.logo}>
                        CareerLink
                    </Link>
                </div>

                <div style={navStyles.links}>
                    <Link to="/" style={navStyles.link}>Home</Link>
                    <Link to="/jobs" style={navStyles.link}>Jobs</Link>
                    <Link to="/profile" style={navStyles.link}>Profile</Link>
                </div>

                <div style={navStyles.actions}>
                    <button style={navStyles.signIn}>
                        Sign In
                    </button>
                    <button style={navStyles.signUp}>
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
}
