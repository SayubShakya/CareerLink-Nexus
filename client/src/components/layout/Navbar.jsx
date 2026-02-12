import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '@assets/images/temporary_logo.png';
import { ROUTES } from '../../routes/routes';
import authService from '@/services/authService';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const isAuthenticated = authService.isAuthenticated();
    const role = localStorage.getItem('role');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = async () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            await authService.logout();
            navigate('/');
        }
    };

    const getDashboardRoute = () => {
        if (role === 'job_seeker') return ROUTES.JOBSEEKER_DASHBOARD;
        if (role === 'employeer') return ROUTES.EMPLOYER_DASHBOARD;
        return '/';
    };

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
            transition: 'all 0.3s ease',
            cursor: 'pointer'
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
        },
        logoutBtn: {
            padding: '0.65rem 1.4rem',
            backgroundColor: 'transparent',
            color: '#C53030',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.9rem',
            fontWeight: '600',
            border: '1px solid #FEB2B2',
            cursor: 'pointer',
            marginLeft: '10px',
            transition: 'all 0.2s'
        }
    };

    return (
        <nav className={`sticky-header ${scrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="CareerLink" style={{ height: '140px', objectFit: 'contain' }} />
                </Link>

                <nav style={navStyles.navLinks} aria-label="Quick Links">
                    <Link to="/" style={navStyles.link} className="nav-item">Home</Link>
                    <Link to="/find-jobs" style={navStyles.link} className="nav-item">Find Jobs</Link>

                    {isAuthenticated ? (
                        <>
                            <Link to={getDashboardRoute()} style={navStyles.link} className="nav-item">Dashboard</Link>
                            <button onClick={handleLogout} style={navStyles.logoutBtn} className="logout-nav-btn">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to={ROUTES.LOGIN} style={navStyles.link} className="nav-item">Sign In</Link>
                            <Link
                                to={ROUTES.REGISTER}
                                style={{ ...navStyles.btn, textDecoration: 'none', display: 'inline-block' }}
                                className="signup-nav-btn"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
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
