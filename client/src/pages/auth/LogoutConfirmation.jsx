import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '@/services/authService';
import { ROUTES } from '@/routes/routes';
import { LogOut, ArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify';

const LogoutConfirmation = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleConfirmLogout = async () => {
        setLoading(true);
        try {
            await authService.logout();
            // Using replace: true prevents back navigation after logout
            navigate(ROUTES.LOGIN, { state: { message: 'Logged out successfully.' }, replace: true });
        } catch (error) {
            console.error("Logout failed", error);
            toast.error("Logout failed. Please try again.");
            setLoading(false);
        }
    };

    const handleCancel = () => {
        // Go back to the previous page
        navigate(-1);
    };

    const styles = {
        container: {
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--bg-subtle)', // Assuming this variable exists
            padding: '20px'
        },
        card: {
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            textAlign: 'center',
            maxWidth: '500px',
            width: '100%',
            animation: 'fadeIn 0.3s ease-out'
        },
        iconContainer: {
            width: '80px',
            height: '80px',
            backgroundColor: '#FFF5F5',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            color: '#C53030'
        },
        title: {
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--color-brand-primary)', // Assuming variable exists
            marginBottom: '12px'
        },
        message: {
            color: 'var(--text-muted)', // Assuming variable exists
            lineHeight: '1.6',
            marginBottom: '32px'
        },
        buttonGroup: {
            display: 'flex',
            gap: '16px',
            justifyContent: 'center'
        },
        cancelBtn: {
            padding: '12px 24px',
            backgroundColor: 'transparent',
            border: '1px solid var(--border-subtle)', // Assuming variable exists
            color: 'var(--text-main)', // Assuming variable exists
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'background-color 0.2s'
        },
        logoutBtn: {
            padding: '12px 24px',
            backgroundColor: '#E53E3E',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'background-color 0.2s'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.iconContainer}>
                    <LogOut size={40} />
                </div>
                <h2 style={styles.title}>Data Security Check</h2>
                <p style={styles.message}>
                    Are you sure you want to log out? <br />
                    Any unsaved changes may be lost. You will need to sign in again to access your account.
                </p>
                <div style={styles.buttonGroup}>
                    <button
                        onClick={handleCancel}
                        style={styles.cancelBtn}
                        className="btn-secondary"
                        disabled={loading}
                    >
                        <ArrowLeft size={18} />
                        Stay Logged In
                    </button>
                    <button
                        onClick={handleConfirmLogout}
                        style={styles.logoutBtn}
                        className="btn-danger"
                        disabled={loading}
                    >
                        {loading ? 'Logging Out...' : 'Yes, Log Out'}
                    </button>
                </div>
            </div>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .btn-secondary:hover {
                    background-color: #F7FAFC !important;
                }
                .btn-danger:hover {
                    background-color: #C53030 !important;
                    box-shadow: 0 4px 12px rgba(229, 62, 62, 0.2);
                }
            `}</style>
        </div>
    );
};

export default LogoutConfirmation;
