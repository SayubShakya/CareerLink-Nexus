import React from 'react';

const JobCard = ({ job }) => {
    return (
        <div style={styles.card}>
            <div style={styles.header}>
                <div style={styles.logoContainer}>
                    {job.logo ? (
                        <img src={job.logo} alt={job.company} style={styles.logo} />
                    ) : (
                        <div style={styles.logoPlaceholder}>{job.company[0]}</div>
                    )}
                </div>
                <div style={styles.titleSection}>
                    <h3 style={styles.title}>{job.title}</h3>
                    <p style={styles.company}>{job.company}</p>
                </div>
                <div style={styles.favoriteIcon}>
                    <span style={{ color: '#A0AEC0' }}>★</span>
                </div>
            </div>

            <div style={styles.infoRow}>
                <div style={styles.infoItem}>
                    <span style={styles.icon}>💼</span> {job.level}
                </div>
                <div style={styles.divider}>|</div>
                <div style={styles.infoItem}>
                    <span style={styles.icon}>⏰</span> {job.type}
                </div>
                <div style={styles.divider}>|</div>
                <div style={styles.infoItem}>
                    <span style={styles.icon}>📍</span> {job.location}
                </div>
            </div>

            <div style={styles.infoRow}>
                <div style={styles.infoItem}>
                    <span style={styles.icon}>📖</span> {job.experience}
                </div>
                <div style={styles.divider}>|</div>
                <div style={styles.infoItem}>
                    <span style={styles.icon}>💰</span> {job.salary}
                </div>
            </div>

            <div style={styles.tagContainer}>
                {job.tags && job.tags.map((tag, index) => (
                    <span key={index} style={styles.tag}>{tag}</span>
                ))}
            </div>

            <div style={styles.footer}>
                <div style={styles.deadline}>
                    <span style={styles.icon}>📅</span> Deadline: {job.deadline}
                </div>
                <button style={styles.applyBtn}>Apply Now</button>
            </div>
        </div>
    );
};

const styles = {
    card: {
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '30px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        cursor: 'pointer',
        position: 'relative'
    },
    header: {
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start',
        marginBottom: '10px'
    },
    logoContainer: {
        width: '64px',
        height: '64px',
        borderRadius: '12px',
        border: '1px solid #F1F5F9',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        backgroundColor: '#F8FAFC'
    },
    logo: {
        width: '70%',
        height: '70%',
        objectFit: 'contain'
    },
    logoPlaceholder: {
        fontSize: '1.8rem',
        fontWeight: '900',
        color: 'var(--color-brand-accent)'
    },
    titleSection: {
        flex: 1
    },
    title: {
        fontSize: '1.4rem',
        fontWeight: '800',
        color: '#0F172A',
        marginBottom: '6px',
        lineHeight: '1.2'
    },
    company: {
        fontSize: '1rem',
        color: '#64748B',
        fontWeight: '600'
    },
    favoriteIcon: {
        fontSize: '1.5rem',
        cursor: 'pointer',
        color: '#CBD5E1',
        transition: 'color 0.2s'
    },
    infoRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px',
        alignItems: 'center',
        color: '#475569',
        fontSize: '0.95rem',
        fontWeight: '500'
    },
    infoItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        minWidth: '140px'
    },
    divider: {
        color: '#E2E8F0',
        fontWeight: '300'
    },
    icon: {
        fontSize: '1.1rem',
        opacity: 0.7
    },
    tagContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginTop: '10px',
        marginBottom: '10px'
    },
    tag: {
        backgroundColor: '#F1F5F9',
        color: '#475569',
        padding: '6px 12px',
        borderRadius: '8px',
        fontSize: '0.75rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        border: '1px solid #E2E8F0'
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'auto',
        borderTop: '1px solid #F1F5F9',
        paddingTop: '20px'
    },
    deadline: {
        fontSize: '0.9rem',
        color: '#94A3B8',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    },
    applyBtn: {
        padding: '12px 24px',
        backgroundColor: 'var(--color-brand-accent)',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        fontSize: '1rem',
        fontWeight: '700',
        cursor: 'pointer',
        transition: 'all 0.2s',
        boxShadow: '0 4px 10px rgba(62, 97, 255, 0.2)'
    }
};

export default JobCard;
