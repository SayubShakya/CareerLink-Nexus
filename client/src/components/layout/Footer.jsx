import Logo from '@/components/common/Logo';
import { Linkedin, Twitter, MessageCircle, ArrowRight } from 'lucide-react'; // Using lucide icons if available, otherwise fallback to SVG

export default function Footer() {
    return (
        <footer className="footer-root">
            {/* Top Gradient Border */}
            <div className="footer-gradient-border"></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                {/* Newsletter Section */}
                <div className="newsletter-card">
                    <div className="newsletter-content">
                        <h3>Join the Elite Network</h3>
                        <p>Get exclusive access to top-tier roles, industry intelligence, and career strategies delivered to your inbox.</p>
                    </div>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your work email" />
                        <button>
                            Subscribe <ArrowRight size={18} />
                        </button>
                    </div>
                    {/* Decorative glow */}
                    <div className="newsletter-glow"></div>
                </div>

                {/* Main Footer Links */}
                <div className="footer-grid">
                    <div className="brand-col">
                        <Logo variant="full" theme="dark" />
                        <div style={{ height: '24px' }}></div>
                        <p className="brand-desc">
                            The premier ecosystem where the world's most innovative companies meet world-class talent.
                        </p>
                    </div>

                    <div className="link-col">
                        <h4>Platform</h4>
                        <a href="/jobs">Explore Roles</a>
                        <a href="/companies">Elite Companies</a>
                        <a href="/candidates">Talent Network</a>
                        <a href="/pricing">Membership</a>
                    </div>

                    <div className="link-col">
                        <h4>Intelligence</h4>
                        <a href="/about">Industry Reports</a>
                        <a href="/careers">Career Strategy</a>
                        <a href="/blog">The Journal</a>
                        <a href="/contact">Concierge</a>
                    </div>

                    <div className="link-col">
                        <h4>Legal</h4>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                        <a href="/cookies">Information Safety</a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} CareerLink Hub. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" aria-label="Contact"><MessageCircle size={20} /></a>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-root {
                    background-color: #020617; /* Very dark slate/black */
                    color: #94A3B8;
                    padding: 80px 0 30px;
                    margin-top: auto;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Inter', sans-serif;
                }

                .footer-gradient-border {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #3E61FF, #8B5CF6, #EC4899);
                }

                .newsletter-card {
                    background: linear-gradient(145deg, rgba(30, 41, 59, 0.4), rgba(15, 23, 42, 0.6));
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 24px;
                    padding: 48px;
                    margin-bottom: 80px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 40px;
                    position: relative;
                    overflow: hidden;
                    backdrop-filter: blur(10px);
                }
                
                .newsletter-glow {
                    position: absolute;
                    top: -50%;
                    right: -10%;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
                    border-radius: 50%;
                    z-index: 0;
                    pointer-events: none;
                }

                .newsletter-content {
                    flex: 1;
                    max-width: 500px;
                    position: relative;
                    z-index: 1;
                }
                .newsletter-content h3 {
                    color: white;
                    font-size: 2rem;
                    font-weight: 800;
                    margin-bottom: 12px;
                    letter-spacing: -0.02em;
                }
                .newsletter-content p {
                    font-size: 1.05rem;
                    line-height: 1.6;
                    color: #CBD5E1;
                }

                .newsletter-form {
                    flex: 1;
                    /* max-width: 450px; removed max-width constrain to fill space */ 
                    display: flex;
                    gap: 12px;
                    position: relative;
                    z-index: 1;
                }
                .newsletter-form input {
                    flex: 1;
                    background: rgba(15, 23, 42, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 16px 24px;
                    color: white;
                    font-size: 1rem;
                    transition: all 0.2s;
                    outline: none;
                }
                .newsletter-form input:focus {
                    border-color: #3E61FF;
                    background: rgba(15, 23, 42, 1);
                    box-shadow: 0 0 0 4px rgba(62, 97, 255, 0.15);
                }
                .newsletter-form button {
                    background: #3E61FF;
                    color: white;
                    border: none;
                    border-radius: 12px;
                    padding: 0 28px;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.2s;
                    white-space: nowrap;
                }
                .newsletter-form button:hover {
                    background: #2563EB;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
                }

                /* Footer Grid */
                .footer-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1fr;
                    gap: 60px;
                    margin-bottom: 60px;
                }
                
                .brand-col { padding-right: 40px; }
                .footer-logo {
                    height: 40px;
                    margin-bottom: 24px;
                    filter: brightness(0) invert(1);
                    opacity: 0.9;
                }
                .brand-desc {
                    line-height: 1.7;
                    font-size: 1rem;
                    color: #94A3B8;
                }

                .link-col h4 {
                    color: white;
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 24px;
                }
                .link-col a {
                    display: block;
                    color: #94A3B8;
                    text-decoration: none;
                    margin-bottom: 14px;
                    font-size: 0.95rem;
                    transition: 0.2s;
                }
                .link-col a:hover {
                    color: #3E61FF;
                    transform: translateX(4px);
                }

                /* Bottom Bar */
                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding-top: 32px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .footer-bottom p { font-size: 0.9rem; color: #64748B; }

                .social-links { display: flex; gap: 24px; }
                .social-links a {
                    color: #64748B;
                    transition: 0.2s;
                }
                .social-links a:hover {
                    color: white;
                    transform: translateY(-3px);
                }

                @media (max-width: 1024px) {
                    .newsletter-card { flex-direction: column; text-align: center; }
                    .newsletter-form { width: 100%; }
                    .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
                    .brand-col { grid-column: span 2; padding-right: 0; text-align: center; }
                    .footer-logo { margin: 0 auto 24px; }
                }
                @media (max-width: 640px) {
                    .footer-grid { grid-template-columns: 1fr; text-align: center; }
                    .brand-col { grid-column: span 1; }
                    .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
                    .newsletter-form { flex-direction: column; }
                    .newsletter-form button { width: 100%; padding: 16px; justify-content: center; }
                }
            `}</style>
        </footer>
    );
}
