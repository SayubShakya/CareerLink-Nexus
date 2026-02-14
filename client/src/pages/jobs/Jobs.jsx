import React, { useState } from 'react';
import JobCard from '../../components/features/JobCard/JobCard';

const MOCK_JOBS = [
    {
        id: 1,
        title: 'Senior Frontend Developer',
        company: 'TechCorp Solutions',
        level: 'Senior Level',
        type: 'Full Time',
        location: 'San Francisco, CA',
        experience: 'More than 5 years',
        salary: '$120,000 - $160,000',
        tags: ['React', 'TypeScript', 'Node.js', 'Tailwind'],
        deadline: '2 days from now',
        logo: null
    },
    {
        id: 2,
        title: 'UX/UI Designer',
        company: 'DesignHub Inc',
        level: 'Mid Level',
        type: 'Full Time',
        location: 'New York, NY',
        experience: '3-5 years',
        salary: '$90,000 - $120,000',
        tags: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping'],
        deadline: '1 week ago',
        logo: null
    },
    {
        id: 3,
        title: 'Full Stack Developer',
        company: 'StartupXYZ',
        level: 'Senior Level',
        type: 'Remote',
        location: 'Remote',
        experience: 'More than 5 years',
        salary: '$100,000 - $140,000',
        tags: ['React', 'Python', 'AWS', 'PostgreSQL'],
        deadline: '3 days ago',
        logo: null
    },
    {
        id: 4,
        title: 'Assistant General Manager-Operations',
        company: 'Professional Holdings Limited (PHL)',
        level: 'Senior Level',
        type: 'Full Time',
        location: 'Kathmandu',
        experience: 'More than 5 years',
        salary: 'Not Disclosed',
        tags: ['Strategic Operations', 'Process Automation', 'Leadership', 'Data-Driven'],
        deadline: '14 days from now',
        logo: null
    }
];

const Jobs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('All Jobs');

    const filters = ['All Jobs', 'Full-time', 'Part-time', 'Remote'];

    return (
        <div style={styles.page}>
            <div className="container">
                {/* Search Section */}
                <div style={styles.searchSection}>
                    <div style={styles.searchContainer}>
                        <div style={styles.inputWrapper}>
                            <span style={styles.searchIcon}>🔍</span>
                            <input
                                type="text"
                                placeholder="Search job title or keyword"
                                style={styles.searchInput}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div style={styles.divider}></div>
                        <div style={styles.inputWrapper}>
                            <span style={styles.searchIcon}>📍</span>
                            <input
                                type="text"
                                placeholder="Location"
                                style={styles.searchInput}
                                value={locationQuery}
                                onChange={(e) => setLocationQuery(e.target.value)}
                            />
                        </div>
                        <button style={styles.searchBtn}>Search</button>
                    </div>

                    <div style={styles.filterPills}>
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                style={{
                                    ...styles.filterPill,
                                    ...(activeFilter === filter ? styles.activeFilterPill : {})
                                }}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Header Section */}
                <div style={styles.listHeader}>
                    <h2 style={styles.listTitle}>Available Jobs</h2>
                    <p style={styles.jobCount}>{MOCK_JOBS.length} jobs found</p>
                </div>

                {/* Job List */}
                <div style={styles.jobGrid}>
                    {MOCK_JOBS.map(job => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: {
        backgroundColor: '#F7FAFC',
        minHeight: '100vh',
        padding: 'var(--space-xl) 0'
    },
    searchSection: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-premium)',
        marginBottom: '40px'
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        padding: '10px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid #E2E8F0',
        marginBottom: '20px'
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        flex: 1,
        padding: '0 10px'
    },
    searchIcon: {
        fontSize: '1.2rem',
        color: '#A0AEC0'
    },
    searchInput: {
        border: 'none',
        outline: 'none',
        width: '100%',
        fontSize: '1rem',
        color: 'var(--text-main)',
        background: 'transparent'
    },
    divider: {
        width: '1px',
        height: '30px',
        backgroundColor: '#E2E8F0'
    },
    searchBtn: {
        padding: '12px 30px',
        backgroundColor: 'var(--color-brand-accent)',
        color: 'white',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        fontSize: '1rem',
        fontWeight: '700',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
    },
    filterPills: {
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
    },
    filterPill: {
        padding: '8px 24px',
        borderRadius: 'var(--radius-full)',
        border: '1px solid #E2E8F0',
        backgroundColor: 'white',
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
    },
    activeFilterPill: {
        backgroundColor: 'var(--color-brand-accent)',
        color: 'white',
        borderColor: 'var(--color-brand-accent)'
    },
    listHeader: {
        marginBottom: '30px'
    },
    listTitle: {
        fontSize: '2rem',
        fontWeight: '800',
        color: 'var(--color-brand-primary)',
        marginBottom: '8px'
    },
    jobCount: {
        fontSize: '1rem',
        color: 'var(--text-muted)'
    },
    jobGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
        gap: '30px'
    }
};

export default Jobs;