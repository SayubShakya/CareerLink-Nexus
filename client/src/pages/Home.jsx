import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Slider from '@/components/common/Slider';
import meshBg from '@/assets/images/mesh-bg.png';

export default function Home() {
    const homeStyles = {
        heroSection: {
            paddingTop: 'calc(var(--header-height) + 120px)',
            paddingBottom: '100px',
            position: 'relative',
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
        },
        heroContent: {
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10
        },
        preTitle: {
            fontSize: '0.85rem',
            fontWeight: '700',
            color: 'var(--color-brand-accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            marginBottom: 'var(--space-sm)',
            display: 'block'
        },
        title: {
            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
            fontWeight: '800',
            marginBottom: 'var(--space-md)',
            color: 'var(--color-brand-primary)',
            letterSpacing: '-0.04em'
        },
        editorialText: {
            fontSize: '0.9em',
            verticalAlign: 'baseline',
            marginLeft: '5px'
        },
        subtitle: {
            fontSize: '1.25rem',
            color: 'var(--text-muted)',
            maxWidth: '650px',
            margin: '0 auto 50px auto',
            lineHeight: '1.7'
        },
        btnContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '40px'
        }
    };

    return (
        <div style={{ position: 'relative', backgroundColor: 'white' }}>
            <Navbar />

            <main>
                {/* Section 1: Hero */}
                <section style={homeStyles.heroSection}>
                    <div className="hero-visual-wrapper">
                        <img src={meshBg} alt="" className="mesh-bg" />
                    </div>

                    <div className="container" style={homeStyles.heroContent}>
                        <span style={homeStyles.preTitle} className="animate-up">Elite Talent Network</span>
                        <h1 style={homeStyles.title} className="animate-up delay-1">
                            Refined <span className="editorial-title" style={homeStyles.editorialText}>Opportunities</span>
                        </h1>
                        <p style={homeStyles.subtitle} className="animate-up delay-2">
                            Where exceptional talent meets industry-defining companies. Join the premier ecosystem for modern professional growth.
                        </p>

                        <div className="animate-up delay-2" style={homeStyles.btnContainer}>
                            <button className="btn-premium btn-premium-primary">Explore Collection</button>
                            <button className="btn-premium btn-premium-outline">Our Philosophy</button>
                        </div>
                    </div>
                </section>

                {/* Section 2: Visual Experience (Slider) */}
                <section style={{ paddingBottom: '120px' }} className="animate-up delay-2">
                    <div className="container">
                        <div style={{ padding: '20px', background: 'white', borderRadius: '30px', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.08)', border: '1px solid var(--border-subtle)' }}>
                            <Slider />
                        </div>
                    </div>
                </section>

                {/* Section 3: Curated Roles */}
                <section style={{ padding: '120px 0 200px', background: 'var(--bg-subtle)' }}>
                    <div className="container">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '12px', fontWeight: '800' }}>Curated Selection</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Meticulously selected positions for the discerning professional.</p>
                            </div>
                            <button className="btn-premium btn-premium-outline" style={{ minWidth: 'auto', padding: '0.75rem 1.5rem' }}>View All Roles</button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px' }}>
                            {[
                                { title: 'Principal Designer', company: 'Linear', location: 'Remote / SF', type: 'Design' },
                                { title: 'AI Engineering Lead', company: 'Anthropic', location: 'London / Hybrid', type: 'Engineering' },
                                { title: 'Founding Product Manager', company: 'Vercel', location: 'New York / Remote', type: 'Product' }
                            ].map((job, i) => (
                                <div key={i} className="glow-card">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
                                        <div style={{ width: '60px', height: '60px', background: '#f0f2f5', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <span style={{ fontWeight: '800', color: 'var(--color-brand-accent)' }}>{job.company[0]}</span>
                                        </div>
                                        <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--color-brand-accent)', padding: '6px 12px', background: 'rgba(62, 97, 255, 0.08)', borderRadius: '20px' }}>{job.type}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', fontWeight: '700' }}>{job.title}</h3>
                                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '25px' }}>{job.company} • {job.location}</p>
                                    <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-brand-primary)' }}>$160k — $240k</span>
                                        <button style={{ color: 'var(--color-brand-accent)', fontWeight: '800', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>Apply Now</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
