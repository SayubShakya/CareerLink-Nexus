import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '@assets/images/temporary_logo.png';
import authService from '@/services/authService';
import { ROUTES } from '@/routes/routes';
import { Search, FilePlus, ClipboardList, LogOut } from 'lucide-react';

const JobseekerNavbar = () => {
    const navigate = useNavigate();
    const user = authService.getCurrentUser();

    const handleLogout = async () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            await authService.logout();
            navigate(ROUTES.LOGIN);
        }
    };

    const styles = {
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 40px',
            backgroundColor: 'white',
            borderBottom: '1px solid var(--border-subtle)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        },
        logoContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
        },
        brand: {
            fontWeight: '900',
            color: 'var(--color-brand-primary)',
            fontSize: '1.25rem',
            letterSpacing: '-0.04em',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        links: {
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
        },
        link: {
            textDecoration: 'none',
            color: 'var(--text-main)',
            fontWeight: '600',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s',
            padding: '8px 12px',
            borderRadius: '8px'
        },
        logoutBtn: {
            padding: '8px 16px',
            backgroundColor: '#FFF5F5',
            color: '#C53030',
            border: '1px solid #FEB2B2',
            borderRadius: '10px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s'
        }
    };

    return (
        <nav style={styles.nav}>
            <div style={styles.logoContainer}>
                <Link to={ROUTES.JOBSEEKER_DASHBOARD} style={styles.brand}>
                    Welcome, {user?.first_name || 'Seeker'}
                </Link>
            </div>

            <div style={styles.links}>
                <Link to={ROUTES.JOBSEEKER_DASHBOARD} style={styles.link} className="nav-item">
                    <ClipboardList size={18} />
                    Overview
                </Link>
                <Link to={`${ROUTES.JOBSEEKER_DASHBOARD}#find-jobs`} style={styles.link} className="nav-item">
                    <Search size={18} />
                    Find Jobs
                </Link>
                <Link to={ROUTES.CV_BUILDER} style={styles.link} className="nav-item">
                    <FilePlus size={18} />
                    Create CV
                </Link>
                <div style={{ width: '1px', height: '20px', backgroundColor: '#E2E8F0', margin: '0 8px' }}></div>
                <button onClick={handleLogout} style={styles.logoutBtn} className="logout-btn">
                    <LogOut size={18} />
                    Logout
                </button>
            </div>

            <style>{`
                .nav-item:hover {
                    background-color: #F3F6FF;
                    color: var(--color-brand-primary) !important;
                }
                .logout-btn:hover {
                    background-color: #FEB2B2 !important;
                    color: #9B2C2C !important;
                }
            `}</style>
        </nav>
    );
};

export default JobseekerNavbar;
