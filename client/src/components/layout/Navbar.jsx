import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/images/temporary_logo.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyles = {
        brand: {
            fontSize: '1.6rem',
            fontWeight: '800',
            color: 'var(--color-brand-primary)',
            textDecoration: 'none',
            letterSpacing: '-0.03em'
        },
        accent: {
            color: 'var(--color-brand-accent)'
        },
        navLinks: {
            display: 'flex',
            gap: 'var(--space-md)',
            alignItems: 'center'
        },
        link: {
            fontSize: '0.95rem',
            fontWeight: '500',
            color: 'var(--text-main)',
            textDecoration: 'none',
            opacity: 0.8,
            transition: 'all 0.3s ease'
        },
        btn: {
            padding: '0.65rem 1.4rem',
            backgroundColor: 'var(--color-brand-primary)',
            color: 'white',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.9rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            marginLeft: '10px'
        }
    };

    return (
        <nav className={`sticky-header ${scrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="CareerLink" style={{ height: '140px', objectFit: 'contain' }} />
                </Link>

                <nav style={navStyles.navLinks} aria-label="Quick Links">
                    <Link to="/jobs" style={navStyles.link} className="nav-item" aria-label="Explore Jobs">Explore</Link>
                    <Link to="/talents" style={navStyles.link} className="nav-item" aria-label="Our Talents">Talents</Link>
                    <Link to="/about" style={navStyles.link} className="nav-item" aria-label="Our Story">Story</Link>
                    <button style={navStyles.btn} aria-label="Join CareerLink">Join Now</button>
                </nav>
            </div>

            <style>{`
        .nav-item:hover {
          opacity: 1 !important;
          color: var(--color-brand-accent) !important;
        }
        @media (max-width: 768px) {
          nav { display: none !important; }
        }
      `}</style>
        </nav>
    );
}
