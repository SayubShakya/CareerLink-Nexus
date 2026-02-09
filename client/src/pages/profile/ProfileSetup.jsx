import React, { useState } from 'react';

const ProfileSetup = () => {
    const [skills, setSkills] = useState(['Product Design', 'React', 'Node.js']);
    const [newSkill, setNewSkill] = useState('');

    const addSkill = (e) => {
        if (e.key === 'Enter' && newSkill.trim()) {
            if (!skills.includes(newSkill.trim())) {
                setSkills([...skills, newSkill.trim()]);
            }
            setNewSkill('');
        }
    };

    const removeSkill = (skillToRemove) => {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    };

    const styles = {
        section: {
            padding: 'var(--space-xl) 0',
            backgroundColor: 'var(--bg-subtle)',
            minHeight: 'calc(100vh - var(--header-height))'
        },
        card: {
            backgroundColor: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: '50px',
            boxShadow: 'var(--shadow-premium)',
            border: '1px solid var(--border-subtle)',
            maxWidth: '800px',
            margin: '0 auto'
        },
        header: {
            marginBottom: '40px',
            textAlign: 'center'
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: '800',
            color: 'var(--color-brand-primary)',
            marginBottom: '10px'
        },
        subtitle: {
            color: 'var(--text-muted)',
            fontSize: '1.1rem'
        },
        formGroup: {
            marginBottom: '30px'
        },
        label: {
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: '700',
            color: 'var(--color-brand-primary)',
            marginBottom: '10px'
        },
        input: {
            width: '100%',
            padding: '14px 18px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            fontSize: '1rem',
            outline: 'none',
            transition: 'all 0.3s ease'
        },
        textarea: {
            width: '100%',
            padding: '14px 18px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            fontSize: '1rem',
            outline: 'none',
            minHeight: '120px',
            resize: 'vertical',
            fontFamily: 'inherit'
        },
        tagContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '15px'
        },
        tag: {
            backgroundColor: 'rgba(62, 97, 255, 0.08)',
            color: 'var(--color-brand-accent)',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.85rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        removeTag: {
            cursor: 'pointer',
            fontSize: '1.2rem',
            lineHeight: 0
        },
        submitBtn: {
            backgroundColor: 'var(--color-brand-primary)',
            color: 'white',
            border: 'none',
            padding: '16px 32px',
            borderRadius: 'var(--radius-md)',
            fontSize: '1rem',
            fontWeight: '700',
            cursor: 'pointer',
            width: '100%',
            marginTop: '20px',
            transition: 'transform 0.2s, background-color 0.2s'
        }
    };

    return (
        <div style={styles.section}>
            <div className="container">
                <div style={styles.card} className="animate-up">
                    <div style={styles.header}>
                        <h1 style={styles.title}>Complete Your Profile</h1>
                        <p style={styles.subtitle}>Help us match you with the best opportunities.</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Professional Headline</label>
                            <input
                                type="text"
                                placeholder="e.g. Senior Product Designer"
                                style={styles.input}
                                className="profile-input"
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Professional Summary</label>
                            <textarea
                                placeholder="Briefly describe your expertise and achievements..."
                                style={styles.textarea}
                                className="profile-input"
                            ></textarea>
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Skills & Proficiency</label>
                            <input
                                type="text"
                                placeholder="Press Enter to add skills"
                                style={styles.input}
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                onKeyDown={addSkill}
                                className="profile-input"
                            />
                            <div style={styles.tagContainer}>
                                {skills.map(skill => (
                                    <span key={skill} style={styles.tag}>
                                        {skill}
                                        <span style={styles.removeTag} onClick={() => removeSkill(skill)}>&times;</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Years of Experience</label>
                                <input type="number" placeholder="5" style={styles.input} className="profile-input" />
                            </div>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Expected Salary ($)</label>
                                <input type="text" placeholder="120k - 150k" style={styles.input} className="profile-input" />
                            </div>
                        </div>

                        <button style={styles.submitBtn} className="btn-premium btn-premium-primary">
                            Save Profile
                        </button>
                    </form>
                </div>
            </div>

            <style>{`
                .profile-input:focus {
                    border-color: var(--color-brand-accent) !important;
                    box-shadow: 0 0 0 4px rgba(62, 97, 255, 0.1);
                }
                .profile-input::placeholder {
                    color: #A0AEC0;
                }
            `}</style>
        </div>
    );
};

export default ProfileSetup;
