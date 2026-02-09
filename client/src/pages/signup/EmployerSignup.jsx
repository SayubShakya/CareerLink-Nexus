import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authIllustration from '@/assets/images/auth-illustration.png';
import logo from '@assets/images/temporary_logo.png';
import { ROUTES } from '@/routes/routes';

const styles = {
    pageContainer: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-subtle)',
        padding: '40px 20px'
    },
    card: {
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '1000px',
        minHeight: '700px',
        transition: 'all 0.3s ease'
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
        padding: '50px',
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
    row: {
        display: 'flex',
        gap: '20px',
        marginBottom: '20px'
    },
    inputGroup: {
        flex: 1,
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
    checkboxGroup: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
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
        transition: 'background-color 0.2s'
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
    },
    backBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'var(--text-muted)',
        fontSize: '0.85rem',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        marginBottom: '20px',
        padding: 0
    }
};

const EmployerSignup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        companyWebsite: '',
        jobTitle: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
        if (!formData.companyWebsite.trim()) newErrors.companyWebsite = 'Company website is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Valid work email is required';
        }
        if (!formData.password || formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.terms) {
            newErrors.terms = 'You must accept the terms';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Creating employer account...", formData);
            // API integration here
            navigate('/profile-setup');
        }
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.card}>
                <div style={styles.leftColumn} className="auth-left-hide">
                    <div style={{ alignSelf: 'flex-start', marginBottom: '40px' }}>
                        <Link to="/">
                            <img src={logo} alt="CareerLink" style={{ height: '40px', objectFit: 'contain' }} />
                        </Link>
                    </div>
                    <img src={authIllustration} alt="Authentication" style={styles.illustration} />
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-brand-primary)', marginBottom: '10px' }}>
                        Grow Your Team
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '300px' }}>
                        Access a curated pool of exceptional talent for your industry-defining roles.
                    </p>
                </div>

                <div style={styles.rightColumn}>
                    <button style={styles.backBtn} onClick={() => navigate(ROUTES.REGISTER)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Selection
                    </button>

                    <h2 style={styles.formTitle}>Sign Up</h2>
                    <p style={styles.formSubtitle}>Create your employer account</p>

                    <form onSubmit={handleSubmit}>


                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                placeholder="Enter company name"
                                style={{
                                    ...styles.input,
                                    borderColor: errors.companyName ? '#E53E3E' : 'var(--border-subtle)'
                                }}
                                value={formData.companyName}
                                onChange={handleChange}
                                className="auth-input"
                            />
                            {errors.companyName && <p style={styles.errorText}>{errors.companyName}</p>}
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Company Website</label>
                            <input
                                type="text"
                                name="companyWebsite"
                                placeholder="Enter company Website"
                                style={{
                                    ...styles.input,
                                    borderColor: errors.companyWebsite ? '#E53E3E' : 'var(--border-subtle)'
                                }}
                                value={formData.companyWebsite}
                                onChange={handleChange}
                                className="auth-input"
                            />
                            {errors.companyWebsite && <p style={styles.errorText}>{errors.companyWebsite}</p>}
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Job Title (Optional)</label>
                            <input
                                type="text"
                                name="jobTitle"
                                placeholder="e.g. HR Manager"
                                style={styles.input}
                                value={formData.jobTitle}
                                onChange={handleChange}
                                className="auth-input"
                            />
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Work Email Address</label>
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

                        <div style={styles.row} className="form-row">
                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Password</label>
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

                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Enter confirm password"
                                    style={{
                                        ...styles.input,
                                        borderColor: errors.confirmPassword ? '#E53E3E' : 'var(--border-subtle)'
                                    }}
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="auth-input"
                                />
                                {errors.confirmPassword && <p style={styles.errorText}>{errors.confirmPassword}</p>}
                            </div>
                        </div>

                        <div style={styles.checkboxGroup}>
                            <input
                                type="checkbox"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                                style={{ marginTop: '4px' }}
                            />
                            <div>
                                <label>
                                    I agree to the <span style={styles.link}>Terms & Conditions</span> and <span style={styles.link}>Privacy Policy</span>
                                </label>
                                {errors.terms && <p style={styles.errorText}>{errors.terms}</p>}
                            </div>
                        </div>

                        <button type="submit" style={styles.submitBtn} className="auth-submit-btn">
                            Create Employer Account
                        </button>

                        <p style={styles.switchText}>
                            Already have an account?{' '}
                            <Link to={ROUTES.LOGIN} style={styles.link}>
                                Log In
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
                @media (max-width: 768px) {
                    .auth-left-hide { display: none !important; }
                    .card { max-width: 500px !important; }
                    .form-row { flex-direction: column; gap: 0; }
                    .form-row > div { margin-bottom: 20px; }
                }
            `}</style>
        </div>
    );
};

export default EmployerSignup;
