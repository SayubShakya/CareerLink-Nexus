import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import authService from '@/services/authService';
import {
    Search,
    FilePlus,
    ClipboardList,
    CheckCircle,
    Clock,
    XCircle,
    Bell,
    Settings,
    MapPin,
    Briefcase,
    Filter,
    ChevronRight,
    Building2,
    DollarSign,
    Calendar,
    Star,
    Zap,
    Bookmark,
    TrendingUp,
    FileText,
    Target
} from 'lucide-react';

const JobSeekerDashboard = () => {
    const user = authService.getCurrentUser();
    const location = useLocation();
    const [activeView, setActiveView] = useState('overview');

    // Update view based on URL hash or just keep it in state
    useEffect(() => {
        // If we want to handle navbar clicks that lead here
        if (location.hash === '#find-jobs') {
            setActiveView('find-jobs');
        } else {
            setActiveView('overview');
        }
    }, [location]);

    // Elite Actionable Metrics - 7 Key Indicators
    const stats = [
        { label: 'Total Applied', value: '24', icon: <Briefcase size={20} />, color: '#3E61FF', bg: '#EFF4FF' },
        { label: 'CVs Uploaded', value: '3', icon: <FileText size={20} />, color: '#8B5CF6', bg: '#F5F3FF' },
        { label: 'Pending', value: '12', icon: <Clock size={20} />, color: '#F59E0B', bg: '#FFFBEB' },
        { label: 'Shortlisted', value: '5', icon: <Target size={20} />, color: '#10B981', bg: '#ECFDF5' },
        { label: 'Interviews', value: '2', icon: <Calendar size={20} />, color: '#F43F5E', bg: '#FFF1F2' },
        { label: 'Offers', value: '1', icon: <CheckCircle size={20} />, color: '#06B6D4', bg: '#ECFEFF' },
    ];

    const recentApplications = [
        { id: 1, company: 'Google', role: 'Senior UX Designer', status: 'Pending', date: '2 days ago', location: 'Mountain View, CA', logo: 'G' },
        { id: 2, company: 'Meta', role: 'Product Manager', status: 'Interview', date: '1 week ago', location: 'Menlo Park, CA', logo: 'M' },
        { id: 3, company: 'Amazon', role: 'Software Developer', status: 'Accepted', date: '2 weeks ago', location: 'Seattle, WA', logo: 'A' },
        { id: 4, company: 'Microsoft', role: 'Cloud Architect', status: 'Rejected', date: '3 weeks ago', location: 'Redmond, WA', logo: 'M' },
        { id: 5, company: 'Netflix', role: 'Senior UI Engineer', status: 'Interview', date: '4 days ago', location: 'Los Gatos, CA', logo: 'N' },
        { id: 6, company: 'Tesla', role: 'Full Stack Engineer', status: 'Pending', date: '1 day ago', location: 'Austin, TX', logo: 'T' },
        { id: 7, company: 'Spotify', role: 'Backend Developer', status: 'Pending', date: '5 days ago', location: 'Stockholm, SE', logo: 'S' },
        { id: 8, company: 'Adobe', role: 'Product Designer', status: 'Interview', date: '2 weeks ago', location: 'San Jose, CA', logo: 'A' },
        { id: 9, company: 'Slack', role: 'Engineering Manager', status: 'Accepted', date: '1 month ago', location: 'San Francisco, CA', logo: 'S' },
        { id: 10, company: 'Airbnb', role: 'Frontend Lead', status: 'Rejected', date: '2 weeks ago', location: 'San Francisco, CA', logo: 'A' },
    ];

    const availableJobs = [
        { id: 1, company: 'Google', role: 'Senior UX Designer', level: 'Senior Level', type: 'Full Time', location: 'Mountain View, CA', salary: '$180k - $240k', tags: ['Figma', 'React'], deadline: '3 days left', logoChar: 'G', isNew: true },
        { id: 2, company: 'Meta', role: 'Product Manager', level: 'Mid Level', type: 'Full Time', location: 'Menlo Park, CA', salary: '$160k - $210k', tags: ['Agile', 'Vision'], deadline: '1 week left', logoChar: 'M', isNew: false },
        { id: 3, company: 'Amazon', role: 'Cloud Architect', level: 'Senior Level', type: 'Remote', location: 'Seattle, WA', salary: '$170k - $230k', tags: ['AWS', 'Scale'], deadline: '2 days left', logoChar: 'A', isNew: true },
        { id: 4, company: 'Apple', role: 'iOS Developer', level: 'Mid Level', type: 'Full Time', location: 'Cupertino, CA', salary: '$150k - $200k', tags: ['Swift', 'UIKit'], deadline: '5 days left', logoChar: 'A', isNew: false },
        { id: 5, company: 'Netflix', role: 'Streaming Engineering Lead', level: 'Senior Level', type: 'Full Time', location: 'Los Gatos, CA', salary: '$200k - $300k', tags: ['Java', 'C++'], deadline: '4 days left', logoChar: 'N', isNew: true },
        { id: 6, company: 'Spotify', role: 'Data Scientist', level: 'Mid Level', type: 'Remote', location: 'New York, NY', salary: '$140k - $190k', tags: ['Python', 'SQL'], deadline: '6 days left', logoChar: 'S', isNew: false },
        { id: 7, company: 'Tesla', role: 'Autopilot Engineer', level: 'Senior Level', type: 'Full Time', location: 'Austin, TX', salary: '$180k - $250k', tags: ['C++', 'AI'], deadline: '2 days left', logoChar: 'T', isNew: true },
        { id: 8, company: 'Slack', role: 'Frontend Engineer', level: 'Mid Level', type: 'Full Time', location: 'San Francisco, CA', salary: '$130k - $170k', tags: ['React', 'TS'], deadline: '1 week left', logoChar: 'S', isNew: false },
        { id: 9, company: 'Adobe', role: 'Creative Cloud Specialist', level: 'Mid Level', type: 'Full Time', location: 'San Jose, CA', salary: '$140k - $180k', tags: ['Design', 'UX'], deadline: 'Expired', logoChar: 'A', isNew: false },
        { id: 10, company: 'Airbnb', role: 'Design Lead', level: 'Senior Level', type: 'Remote', location: 'Remote', salary: '$170k - $240k', tags: ['Product', 'Brand'], deadline: '3 days left', logoChar: 'A', isNew: true },
    ];

    const styles = {
        container: {
            padding: '30px 40px',
            maxWidth: '1400px',
            margin: '0 auto',
        },
        statsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
        },
        statCard: {
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '20px',
            border: '1px solid var(--border-subtle)',
            transition: 'all 0.3s ease',
            cursor: 'default'
        },
        statIcon: (bg, color) => ({
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            backgroundColor: bg,
            color: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
        }),
        contentGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px'
        },
        sectionHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
        },
        sectionTitle: {
            fontSize: '1.25rem',
            fontWeight: '800',
            color: 'var(--text-main)',
            letterSpacing: '-0.02em'
        },
        appCard: {
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '20px',
            border: '1px solid var(--border-subtle)',
            marginBottom: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'all 0.2s'
        },
        statusBadge: (status) => {
            const colors = {
                'Pending': { bg: '#FFFBEB', color: '#F59E0B' },
                'Interview': { bg: '#F5F3FF', color: '#8B5CF6' },
                'Accepted': { bg: '#ECFDF5', color: '#10B981' },
                'Rejected': { bg: '#FFF1F2', color: '#F43F5E' }
            };
            const { bg, color } = colors[status] || { bg: '#F3F4F6', color: '#4B5563' };
            return {
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: '700',
                backgroundColor: bg,
                color: color
            };
        },
        hero: {
            background: 'var(--color-brand-primary)',
            borderRadius: '24px',
            padding: '50px 40px',
            color: 'white',
            marginBottom: '32px',
            position: 'relative',
            overflow: 'hidden'
        },
        searchIsland: {
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '8px',
            gap: '12px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
            marginTop: '30px'
        },
        sidebarCard: {
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '24px',
            border: '1px solid var(--border-subtle)',
            marginBottom: '24px'
        },
        applyBtn: {
            backgroundColor: 'var(--color-brand-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            padding: '10px 20px',
            fontWeight: '700',
            fontSize: '0.85rem',
            cursor: 'pointer',
            transition: 'all 0.2s'
        }
    };

    return (
        <div style={styles.container}>
            {activeView === 'overview' ? (
                <>
                    {/* Elite Metrics Grid - 6 Actionable Points */}
                    <div style={styles.statsGrid}>
                        {stats.map((stat, i) => (
                            <div key={i} style={styles.statCard} className="hover-lift">
                                <div style={styles.statIcon(stat.bg, stat.color)}>
                                    {stat.icon}
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    {stat.label}
                                </p>
                                <p style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--text-main)', marginTop: '4px' }}>
                                    {stat.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div style={styles.contentGrid}>
                        {/* Main Stream - Full Width */}
                        <div>
                            <div style={styles.sectionHeader}>
                                <h2 style={styles.sectionTitle}>Pipeline Overview</h2>
                                <button style={{ background: 'none', border: 'none', color: 'var(--color-brand-accent)', fontWeight: '700', cursor: 'pointer', fontSize: '0.9rem' }}>
                                    View Detailed Calendar
                                </button>
                            </div>
                            {recentApplications.map((app) => (
                                <div
                                    key={app.id}
                                    style={{ ...styles.appCard, cursor: 'pointer' }}
                                    className="hover-glow"
                                    onClick={() => console.log('Viewing details for:', app.role)}
                                >
                                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F8F9FA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', color: 'var(--color-brand-primary)' }}>
                                            {app.logo}
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1rem', fontWeight: '700' }}>{app.role}</h3>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>{app.company} • {app.location}</p>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={styles.statusBadge(app.status)}>{app.status.toUpperCase()}</div>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px' }}>{app.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* REDESIGNED FIND JOBS PORTAL */}
                    <div style={styles.hero}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h1 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: '1.1' }}>
                                The Future of <br /> Work is Here.
                            </h1>
                            <p style={{ opacity: 0.8, marginTop: '12px', fontSize: '1.1rem' }}>
                                Personalized discovery for world-class talent.
                            </p>

                            <div style={styles.searchIsland}>
                                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '16px' }}>
                                    <Search size={20} color="var(--color-brand-primary)" />
                                    <input
                                        type="text"
                                        placeholder="Search jobs by title, company, or location..."
                                        style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem', fontWeight: '500' }}
                                    />
                                </div>
                                <button style={{ background: 'var(--color-brand-primary)', color: 'white', border: 'none', borderRadius: '12px', padding: '0 32px', fontWeight: '800', cursor: 'pointer', transition: 'all 0.2s' }}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
                        {/* Jobs Grid - Centered/Refined Padding */}
                        <div>
                            <div style={styles.sectionHeader}>
                                <h2 style={styles.sectionTitle}>Available Opportunities</h2>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button style={{ padding: '6px 12px', background: 'white', border: '1px solid var(--border-subtle)', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600' }}><Filter size={14} /></button>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
                                {availableJobs.map((job) => (
                                    <div
                                        key={job.id}
                                        style={{ ...styles.appCard, flexDirection: 'column', alignItems: 'flex-start', padding: '28px', minHeight: '300px', cursor: 'pointer' }}
                                        className="hover-glow"
                                        onClick={() => console.log('Viewing job:', job.role)}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '24px' }}>
                                            <div style={{ width: '60px', height: '60px', borderRadius: '18px', background: '#F8F9FA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '900', color: 'var(--color-brand-primary)', border: '1px solid var(--border-subtle)' }}>
                                                {job.logoChar}
                                            </div>
                                            <div style={{ display: 'flex', gap: '8px' }}>
                                                {job.isNew && <span style={{ background: '#F0FDF4', color: '#15803D', fontSize: '0.7rem', fontWeight: '800', padding: '6px 10px', borderRadius: '8px', height: 'fit-content' }}>NEW ROLE</span>}
                                            </div>
                                        </div>

                                        <div style={{ marginBottom: '16px' }}>
                                            <h3 style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-0.03em', lineHeight: '1.2' }}>{job.role}</h3>
                                            <p style={{ color: 'var(--color-brand-accent)', fontSize: '0.95rem', fontWeight: '700', marginTop: '4px' }}>{job.company}</p>
                                        </div>

                                        <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} />{job.location}</span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><DollarSign size={16} />{job.salary}</span>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #F9FAFB' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#EF4444', fontWeight: '700' }}>
                                                <Calendar size={16} /> {job.deadline}
                                            </div>
                                            <button style={{ ...styles.applyBtn, padding: '12px 28px', fontSize: '0.9rem' }}>Quick Apply</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            <style>{`
                .hover-lift:hover {
                    box-shadow: 0 15px 35px rgba(0,0,0,0.06);
                    transform: translateY(-4px);
                    border-color: var(--color-brand-primary);
                }
                .hover-glow:hover {
                    box-shadow: 0 10px 25px rgba(62, 97, 255, 0.05);
                    border-color: rgba(62, 97, 255, 0.3);
                }
                input:focus {
                    background-color: #F9FAFB;
                }
            `}</style>
        </div>
    );
};

export default JobSeekerDashboard;
