import React, { useState } from 'react';
import authIllustration from '@/assets/images/auth-illustration.png';
import logo from '@assets/images/temporary_logo.png';

const AuthModal = ({ mode, setMode }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        entityCode: ''
    });

    const isLogin = mode === 'login';

    const styles = {
        container: {
            display: 'flex',
            height: '100%',
            minHeight: '550px'
        },
        leftColumn: {
            flex: 1,
            backgroundColor: '#F3F6FF',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        },
        rightColumn: {
            flex: 1,
            padding: '60px 50px',
            display: 'flex',
            flexDirection: 'column'
        },
        illustration: {
            maxWidth: '100%',
            height: 'auto',
            marginBottom: '30px'
        },
        brandHeader: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
            textDecoration: 'none'
        },
        formTitle: {
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--color-brand-accent)',
            marginBottom: '30px'
        },
        inputGroup: {
            marginBottom: '20px'
        },
        input: {
            width: '100%',
            padding: '12px 16px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.95rem',
            outline: 'none',
            transition: 'border-color 0.2s'
        },
        checkboxGroup: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
        },
        submitBtn: {
            width: '100%',
            padding: '14px',
            backgroundColor: '#2D3748',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            marginBottom: '20px',
            transition: 'background-color 0.2s'
        },
        googleBtn: {
            width: '100%',
            padding: '12px',
            backgroundColor: 'white',
            color: 'var(--text-muted)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.9rem',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
        },
        switchText: {
            marginTop: 'auto',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: 'var(--text-muted)'
        },
        link: {
            color: 'var(--color-brand-accent)',
            textDecoration: 'none',
            fontWeight: '600',
            cursor: 'pointer'
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div style={styles.container}>
            {/* Left Column - Illustration */}
            <div style={styles.leftColumn} className="modal-left-hide">
                <div style={{ alignSelf: 'flex-start', marginBottom: '40px' }}>
                    <img src={logo} alt="CareerLink" style={{ height: '40px', objectFit: 'contain' }} />
                </div>
                <img src={authIllustration} alt="Authentication" style={styles.illustration} />
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-brand-primary)', marginBottom: '10px' }}>
                    {isLogin ? 'Welcome Back!' : 'Start Your Journey'}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '300px' }}>
                    {isLogin
                        ? 'Access your personalized career dashboard and elite opportunities.'
                        : 'Join the premier network for modern professional growth and industry-defining roles.'}
                </p>
            </div>

            {/* Right Column - Form */}
            <div style={styles.rightColumn}>
                <h2 style={styles.formTitle}>{isLogin ? 'Log In' : 'Sign Up'}</h2>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div style={styles.inputGroup}>
                        <input
                            type="text"
                            name="username"
                            placeholder="User name"
                            style={styles.input}
                            value={formData.username}
                            onChange={handleChange}
                            className="auth-input"
                        />
                    </div>

                    {!isLogin && (
                        <div style={styles.inputGroup}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                style={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                                className="auth-input"
                            />
                        </div>
                    )}

                    <div style={styles.inputGroup}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            style={styles.input}
                            value={formData.password}
                            onChange={handleChange}
                            className="auth-input"
                        />
                    </div>



                    <div style={styles.checkboxGroup}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <input type="checkbox" /> Keep me signed in
                        </label>
                        <span style={styles.link}>Forgot password?</span>
                    </div>

                    <button style={styles.submitBtn} className="auth-submit-btn">
                        {isLogin ? 'Log In' : 'Create Account'}
                    </button>

                    <div style={{ textAlign: 'center', margin: '15px 0', fontSize: '0.8rem', color: '#CBD5E0', position: 'relative' }}>
                        <span style={{ backgroundColor: 'white', padding: '0 10px', position: 'relative', zIndex: 1 }}>or</span>
                        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, borderTop: '1px solid #E2E8F0', zIndex: 0 }}></div>
                    </div>

                    <button style={styles.googleBtn} className="google-btn">
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: '18px' }} />
                        Continue with Google
                    </button>

                    <p style={styles.switchText}>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <span style={styles.link} onClick={() => setMode(isLogin ? 'signup' : 'login')}>
                            {isLogin ? 'Sign Up' : 'Log In'}
                        </span>
                    </p>
                </form>
            </div>

            <style>{`
                .auth-input:focus {
                    border-color: var(--color-brand-accent) !important;
                    box-shadow: 0 0 0 3px rgba(62, 97, 255, 0.1);
                }
                .auth-submit-btn:hover {
                    background-color: #1A202C !important;
                }
                .google-btn:hover {
                    background-color: #F7FAFC !important;
                    border-color: #CBD5E0 !important;
                }
                @media (max-width: 768px) {
                    .modal-left-hide { display: none !important; }
                }
            `}</style>
        </div>
    );
};

export default AuthModal;
