import Hero from '@/components/hero/hero';
import StatsSection from '@/components/stats-section/StatsSection';
import Slider from '@/components/common/Slider';
import meshBg from '@/assets/images/mesh-bg.png';

export default function Home() {
    return (
        <div style={{ position: 'relative', backgroundColor: 'white' }}>
            <main>
                {/* Section 1: Hero */}
                <Hero />

                {/* Section 2: Stats */}
                <StatsSection />


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
        </div>
    );
}
