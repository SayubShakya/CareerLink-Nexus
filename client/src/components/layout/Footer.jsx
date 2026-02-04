import logo from '@assets/images/temporary_logo.png';

export default function Footer() {
    const footerStyle = {
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-inverse)',
        padding: 'var(--space-xl) 0 40px',
        marginTop: 'auto',
        position: 'relative',
        overflow: 'hidden'
    };

    const columnHeadingStyle = {
        fontSize: '0.85rem',
        fontWeight: '700',
        marginBottom: '25px',
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
    };

    const linkStyle = {
        color: 'var(--text-light)',
        fontSize: '0.95rem',
        marginBottom: '14px',
        display: 'block',
        transition: 'all 0.3s ease',
        textDecoration: 'none'
    };

    const newsletterContainer = {
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: 'var(--radius-lg)',
        padding: '40px',
        marginBottom: 'var(--space-xl)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '30px',
        border: '1px solid rgba(255, 255, 255, 0.05)'
    };

    return (
        <footer style={footerStyle}>
            {/* Subtle background glow */}
            <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', background: 'var(--color-brand-accent)', opacity: 0.05, filter: 'blur(100px)', borderRadius: '50%' }}></div>

            <div className="container">
                {/* Newsletter Section */}
                <div style={newsletterContainer}>
                    <div style={{ maxWidth: '450px' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '10px', color: 'white' }}>Subscribe to the Elite Newsletter</h3>
                        <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>Get the latest curated roles and career insights delivered to your inbox.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', flex: 1, maxWidth: '400px' }}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="footer-newsletter-input"
                            style={{ flex: 1, padding: '12px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none', transition: 'all 0.3s ease' }}
                        />
                        <button className="btn-premium btn-premium-primary" style={{ minWidth: 'auto', padding: '12px 25px' }}>Subscribe</button>
                    </div>
                </div>

                {/* Main Footer Links */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '50px', marginBottom: '80px' }}>
                    <div style={{ gridColumn: 'span 2' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <img src={logo} alt="CareerLink" style={{ height: '120px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                        </div>
                        <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: '1.8', maxWidth: '300px' }}>
                            The premier ecosystem where the world's most innovative companies meet world-class talent.
                        </p>
                    </div>

                    <div>
                        <h4 style={columnHeadingStyle}>Platform</h4>
                        <a href="/jobs" style={linkStyle} className="footer-link-v2">Explore Collection</a>
                        <a href="/companies" style={linkStyle} className="footer-link-v2">Elite Companies</a>
                        <a href="/candidates" style={linkStyle} className="footer-link-v2">Talent Network</a>
                        <a href="/pricing" style={linkStyle} className="footer-link-v2">Membership</a>
                    </div>

                    <div>
                        <h4 style={columnHeadingStyle}>Intelligence</h4>
                        <a href="/about" style={linkStyle} className="footer-link-v2">Industry Reports</a>
                        <a href="/careers" style={linkStyle} className="footer-link-v2">Career Strategy</a>
                        <a href="/blog" style={linkStyle} className="footer-link-v2">The Journal</a>
                        <a href="/contact" style={linkStyle} className="footer-link-v2">Concierge</a>
                    </div>

                    <div>
                        <h4 style={columnHeadingStyle}>Legal</h4>
                        <a href="/privacy" style={linkStyle} className="footer-link-v2">Privacy Policy</a>
                        <a href="/terms" style={linkStyle} className="footer-link-v2">Terms of Service</a>
                        <a href="/cookies" style={linkStyle} className="footer-link-v2">Information Safety</a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>
                        &copy; {new Date().getFullYear()} CareerLink Hub. All rights reserved. Built for the future of work.
                    </p>

                    <div style={{ display: 'flex', gap: '25px' }}>
                        <a href="#" style={{ color: 'var(--text-light)' }} className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href="#" style={{ color: 'var(--text-light)' }} className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="#" style={{ color: 'var(--text-light)' }} className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
        .footer-link-v2:hover {
          color: white !important;
          transform: translateX(6px);
        }
        .social-icon {
          transition: all 0.3s ease;
          opacity: 0.6;
        }
        .social-icon:hover {
          opacity: 1;
          color: var(--color-brand-accent) !important;
          transform: translateY(-3px);
        }
        @media (max-width: 768px) {
          .newsletter-container {
             flex-direction: column;
             text-align: center;
          }
        }
      `}</style>
        </footer>
    );
}
