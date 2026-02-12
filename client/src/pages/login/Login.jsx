import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authIllustration from '@/assets/images/auth-illustration.png';
import logo from '@assets/images/temporary_logo.png';
import authService from '@/services/authService';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [loading, setLoading] = useState(false);

    const styles = {
        pageContainer: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--bg-subtle)',
            padding: '20px'
        },
        card: {
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '1000px',
            minHeight: '600px'
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
        formTitle: {
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--color-brand-accent)',
            marginBottom: '10px'
        },
        formSubtitle: {
            color: 'var(--text-muted)',
            fontSize: '0.95rem',
            marginBottom: '30px'
        },
        inputGroup: {
            marginBottom: '20px'
        },
        label: {
            display: 'block',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: 'var(--color-brand-primary)',
            marginBottom: '8px'
        },
        input: {
            width: '100%',
            padding: '12px 16px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.95rem',
            outline: 'none',
            transition: 'all 0.2s'
        },
        errorText: {
            color: '#E53E3E',
            fontSize: '0.75rem',
            marginTop: '4px'
        },
        serverErrorBox: {
            backgroundColor: '#FFF5F5',
            border: '1px solid #FEB2B2',
            borderRadius: '8px',
            padding: '12px 16px',
            marginBottom: '20px',
            color: '#C53030',
            fontSize: '0.85rem'
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
            backgroundColor: 'var(--color-brand-primary)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            marginBottom: '20px',
            transition: 'background-color 0.2s',
            opacity: 1
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

    const validate = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
        if (serverError) setServerError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        setServerError('');

        try {
            await authService.login(formData.email, formData.password);
            navigate('/');
        } catch (err) {
            const message = err.response?.data?.message || 'Login failed. Please try again.';
            setServerError(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.card}>
                {/* Left Column - Illustration */}
                <div style={styles.leftColumn} className="auth-left-hide">
                    <div style={{ alignSelf: 'flex-start', marginBottom: '40px' }}>
                        <Link to="/">
                            <img src={logo} alt="CareerLink" style={{ height: '40px', objectFit: 'contain' }} />
                        </Link>
                    </div>
                    <img src={authIllustration} alt="Authentication" style={styles.illustration} />
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-brand-primary)', marginBottom: '10px' }}>
                        Welcome Back!
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '300px' }}>
                        Access your personalized career dashboard and elite opportunities.
                    </p>
                </div>

                {/* Right Column - Form */}
                <div style={styles.rightColumn}>
                    <h2 style={styles.formTitle}>Log In</h2>
                    <p style={styles.formSubtitle}>Enter your credentials to access your account</p>

                    {serverError && <div style={styles.serverErrorBox}>{serverError}</div>}

                    <form onSubmit={handleSubmit}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                style={{
                                    ...styles.input,
                                    borderColor: errors.email ? '#E53E3E' : 'var(--border-subtle)'
                                }}
                                value={formData.email}
                                onChange={handleChange}
                                className="auth-input"
                            />
                            {errors.email && <p style={styles.errorText}>{errors.email}</p>}
                        </div>

                        <div style={styles.inputGroup}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <label style={{ ...styles.label, marginBottom: 0 }}>Password</label>
                                <span style={{ ...styles.link, fontSize: '0.75rem' }}>Forgot password?</span>
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                style={{
                                    ...styles.input,
                                    borderColor: errors.password ? '#E53E3E' : 'var(--border-subtle)'
                                }}
                                value={formData.password}
                                onChange={handleChange}
                                className="auth-input"
                            />
                            {errors.password && <p style={styles.errorText}>{errors.password}</p>}
                        </div>

                        <div style={styles.checkboxGroup}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                <input type="checkbox" /> Keep me signed in
                            </label>
                        </div>

                        <button type="submit" style={{ ...styles.submitBtn, opacity: loading ? 0.7 : 1 }} className="auth-submit-btn" disabled={loading}>
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>

                        <div style={{ textAlign: 'center', margin: '20px 0', fontSize: '0.8rem', color: '#CBD5E0', position: 'relative' }}>
                            <span style={{ backgroundColor: 'white', padding: '0 10px', position: 'relative', zIndex: 1 }}>or continue with</span>
                            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, borderTop: '1px solid #E2E8F0', zIndex: 0 }}></div>
                        </div>

                        <button type="button" style={styles.googleBtn} className="google-btn">
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: '18px' }} />
                            Google Account
                        </button>

                        <p style={styles.switchText}>
                            Don't have an account?{' '}
                            <Link to="/register" style={styles.link}>
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

            <style>{`
                .auth-input:focus {
                    border-color: var(--color-brand-accent) !important;
                    box-shadow: 0 0 0 3px rgba(62, 97, 255, 0.1);
                }
                .auth-submit-btn:hover {
                    background-color: var(--color-brand-accent) !important;
                }
                .google-btn:hover {
                    background-color: #F7FAFC !important;
                    border-color: #CBD5E0 !important;
                }
                @media (max-width: 768px) {
                    .auth-left-hide { display: none !important; }
                    .card { max-width: 500px !important; }
                }
            `}</style>
        </div>
    );
};

export default Login;
