import React from 'react';

/**
 * Premium CareerLink Logo Component
 * @param {string} className - Additional CSS classes
 * @param {string} variant - 'full' (icon + text) or 'icon' (icon only)
 * @param {string} theme - 'light' (dark text) or 'dark' (white text)
 */
const Logo = ({ className = '', variant = 'full', theme = 'light' }) => {
    // Colors
    const primaryColor = '#3E61FF';
    const secondaryColor = '#8B5CF6';
    const textColor = theme === 'dark' ? '#FFFFFF' : '#0F172A';

    // SVG Path for the abstract "Link/Nexus" symbol
    // Designed as two interlocking abstract shapes forming a connection
    const logoIcon = (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
            <defs>
                <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3E61FF" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* Main Symbol: Stylized Connected Nodes */}
            <path
                d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20"
                stroke="url(#logoGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="10 5"
            />

            {/* Inner Core: Represents the 'Nexus' */}
            <path
                d="M20 12L27 16V24L20 28L13 24V16L20 12Z"
                fill="url(#logoGradient)"
                opacity="0.9"
            />

            {/* Connection Dots */}
            <circle cx="20" cy="5" r="3" fill="#3E61FF" />
            <circle cx="35" cy="20" r="3" fill="#8B5CF6" />
        </svg>
    );

    return (
        <div className={`flex items-center gap-3 ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            {logoIcon}

            {variant === 'full' && (
                <div className="logo-text" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                    <span style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: textColor,
                        letterSpacing: '-0.02em',
                        fontFamily: "'Inter', sans-serif"
                    }}>
                        Career<span style={{ color: primaryColor }}>Link</span>
                    </span>
                    <span style={{
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        color: theme === 'dark' ? 'rgba(255,255,255,0.6)' : '#64748B',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        marginTop: '2px',
                        marginLeft: '1px'
                    }}>
                        NEXUS
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
