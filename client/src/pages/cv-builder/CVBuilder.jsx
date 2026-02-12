import React, { useState, useEffect, useRef } from 'react';
import {
    User,
    GraduationCap,
    Briefcase,
    Wrench,
    Trophy,
    BookOpen,
    Award,
    Languages,
    Users,
    Share2,
    Plus,
    Trash2,
    ChevronDown,
    ChevronUp,
    Layout,
    Download,
    Eye,
    Crown
} from 'lucide-react';

const CVBuilder = () => {
    const [cvData, setCvData] = useState({
        template: 'professional',
        about: {
            firstName: '',
            lastName: '',
            designation: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            summary: '',
            socialLinks: [{ platform: 'LinkedIn', url: '' }]
        },
        education: [{ id: Date.now(), degree: '', institute: '', year: '' }],
        experience: [{ id: Date.now(), role: '', company: '', duration: '', tasks: '' }],
        skills: [''],
        achievements: [''],
        trainings: [''],
        awards: [''],
        languages: [''],
        references: [{ name: '', position: '', contact: '' }]
    });

    const [activeSection, setActiveSection] = useState('about');
    const sectionsRef = {
        about: useRef(null),
        education: useRef(null),
        experience: useRef(null),
        skills: useRef(null),
        achievements: useRef(null),
        trainings: useRef(null),
        awards: useRef(null),
        language: useRef(null),
        reference: useRef(null)
    };

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        sectionsRef[sectionId]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const templates = [
        { id: 'professional', name: 'Professional', isPremium: false },
        { id: 'minimal', name: 'Minimal', isPremium: false },
        { id: 'modern', name: 'Modern', isPremium: false },
        { id: 'executive', name: 'Executive', isPremium: false },
        { id: 'creative', name: 'Creative', isPremium: false },
        { id: 'elite-gold', name: 'Elite Gold', isPremium: true },
        { id: 'dark-mode', name: 'Premium Dark', isPremium: true }
    ];

    const styles = {
        page: {
            display: 'grid',
            gridTemplateColumns: '240px 1fr 450px',
            height: 'calc(100vh - 64px)',
            backgroundColor: '#F8F9FA'
        },
        // 1. Sidebar
        sidebar: {
            backgroundColor: 'white',
            borderRight: '1px solid #E5E7EB',
            overflowY: 'auto',
            padding: '24px 12px'
        },
        sidebarItem: (isActive) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            borderRadius: '12px',
            color: isActive ? 'var(--color-brand-primary)' : '#6B7280',
            backgroundColor: isActive ? '#F3F6FF' : 'transparent',
            fontWeight: isActive ? '700' : '600',
            fontSize: '0.9rem',
            cursor: 'pointer',
            marginBottom: '4px',
            transition: 'all 0.2s'
        }),
        // 2. Middle Section
        middle: {
            padding: '40px',
            overflowY: 'auto',
            backgroundColor: 'white',
            borderRight: '1px solid #E5E7EB'
        },
        topBar: {
            position: 'sticky',
            top: 0,
            backgroundColor: 'white',
            zIndex: 10,
            paddingBottom: '24px',
            borderBottom: '1px solid #F3F4F6',
            marginBottom: '32px'
        },
        templateSelector: {
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            paddingBottom: '8px'
        },
        templateBadge: (isSelected, isPremium) => ({
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '0.8rem',
            fontWeight: '700',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            border: isSelected ? '2px solid var(--color-brand-primary)' : '1px solid #E5E7EB',
            backgroundColor: isSelected ? '#F3F6FF' : 'white',
            color: isSelected ? 'var(--color-brand-primary)' : '#4B5563'
        }),
        formSection: {
            marginBottom: '48px',
            scrollMarginTop: '100px'
        },
        inputGroup: {
            marginBottom: '20px'
        },
        label: {
            display: 'block',
            fontSize: '0.85rem',
            fontWeight: '700',
            color: '#374151',
            marginBottom: '8px'
        },
        input: {
            width: '100%',
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid #E5E7EB',
            outline: 'none',
            fontSize: '0.95rem',
            transition: 'border-color 0.2s'
        },
        textarea: {
            width: '100%',
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid #E5E7EB',
            outline: 'none',
            fontSize: '0.95rem',
            minHeight: '120px',
            resize: 'vertical'
        },
        // 3. Right Section (Preview)
        preview: {
            padding: '40px 24px',
            overflowY: 'auto',
            backgroundColor: '#EDF0F5',
            display: 'flex',
            justifyContent: 'center'
        },
        cvPage: {
            width: '100%',
            minHeight: '580px',
            backgroundColor: 'white',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            padding: '40px',
            fontSize: '0.75rem',
            color: '#1F2937'
        },
        actionBtn: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '8px',
            backgroundColor: 'var(--color-brand-primary)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '700',
            fontSize: '0.85rem',
            marginTop: '12px'
        }
    };

    const handleAboutChange = (field, value) => {
        setCvData({
            ...cvData,
            about: { ...cvData.about, [field]: value }
        });
    };

    const addEducation = () => {
        setCvData({
            ...cvData,
            education: [...cvData.education, { id: Date.now(), degree: '', institute: '', year: '' }]
        });
    };

    const updateEducation = (id, field, value) => {
        const updated = cvData.education.map(edu =>
            edu.id === id ? { ...edu, [field]: value } : edu
        );
        setCvData({ ...cvData, education: updated });
    };

    const removeEducation = (id) => {
        setCvData({ ...cvData, education: cvData.education.filter(e => e.id !== id) });
    };

    const addExperience = () => {
        setCvData({
            ...cvData,
            experience: [...cvData.experience, { id: Date.now(), role: '', company: '', duration: '', tasks: '' }]
        });
    };

    const updateExperience = (id, field, value) => {
        const updated = cvData.experience.map(exp =>
            exp.id === id ? { ...exp, [field]: value } : exp
        );
        setCvData({ ...cvData, experience: updated });
    };

    return (
        <div style={styles.page}>
            {/* 1. Left Sidebar Navigation */}
            <aside style={styles.sidebar}>
                <div style={{ marginBottom: '24px', paddingLeft: '16px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '900', color: 'var(--color-brand-primary)' }}>CV BUILDER</h3>
                </div>
                {[
                    { id: 'about', label: 'About', icon: <User size={18} /> },
                    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
                    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
                    { id: 'skills', label: 'Skills', icon: <Wrench size={18} /> },
                    { id: 'achievements', label: 'Achievements', icon: <Trophy size={18} /> },
                    { id: 'trainings', label: 'Trainings', icon: <BookOpen size={18} /> },
                    { id: 'awards', label: 'Awards', icon: <Award size={18} /> },
                    { id: 'language', label: 'Language', icon: <Languages size={18} /> },
                    { id: 'reference', label: 'Reference', icon: <Users size={18} /> },
                    { id: 'share', label: 'Share CV', icon: <Share2 size={18} /> }
                ].map(item => (
                    <div
                        key={item.id}
                        style={styles.sidebarItem(activeSection === item.id)}
                        onClick={() => scrollToSection(item.id)}
                    >
                        {item.icon}
                        {item.label}
                    </div>
                ))}
            </aside>

            {/* 2. Middle Input Form */}
            <main style={styles.middle}>
                <div style={styles.topBar}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h2 style={{ fontWeight: '850', fontSize: '1.25rem' }}>Personalize Your Template</h2>
                        <button style={{ ...styles.actionBtn, backgroundColor: '#10B981' }}><Download size={16} /> Download PDF</button>
                    </div>
                    <div style={styles.templateSelector}>
                        {templates.map(t => (
                            <div
                                key={t.id}
                                style={styles.templateBadge(cvData.template === t.id, t.isPremium)}
                                onClick={() => setCvData({ ...cvData, template: t.id })}
                            >
                                <Layout size={14} />
                                {t.name}
                                {t.isPremium && <Crown size={12} color="#F59E0B" />}
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ paddingBottom: '100px' }}>
                    {/* About Section */}
                    <section ref={sectionsRef.about} style={styles.formSection}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <User color="var(--color-brand-primary)" /> About Yourself
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div style={styles.inputGroup}>
                                <label style={styles.label}>First Name</label>
                                <input
                                    style={styles.input}
                                    placeholder="e.g. Sayub"
                                    onChange={(e) => handleAboutChange('firstName', e.target.value)}
                                />
                            </div>
                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Last Name</label>
                                <input
                                    style={styles.input}
                                    placeholder="e.g. Shakya"
                                    onChange={(e) => handleAboutChange('lastName', e.target.value)}
                                />
                            </div>
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Designation</label>
                            <input
                                style={styles.input}
                                placeholder="e.g. Senior Frontend Engineer"
                                onChange={(e) => handleAboutChange('designation', e.target.value)}
                            />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Email Address</label>
                                <input style={styles.input} placeholder="name@example.com" onChange={(e) => handleAboutChange('email', e.target.value)} />
                            </div>
                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Phone Number</label>
                                <input style={styles.input} placeholder="+977-9800000000" onChange={(e) => handleAboutChange('phone', e.target.value)} />
                            </div>
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Career Summary</label>
                            <textarea style={styles.textarea} placeholder="Briefly describe your career goals and achievements..." onChange={(e) => handleAboutChange('summary', e.target.value)}></textarea>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section ref={sectionsRef.education} style={styles.formSection}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <GraduationCap color="var(--color-brand-primary)" /> Education
                        </h3>
                        {cvData.education.map((edu, index) => (
                            <div key={edu.id} style={{ padding: '20px', border: '1px solid #F3F4F6', borderRadius: '16px', marginBottom: '16px', position: 'relative' }}>
                                <button
                                    onClick={() => removeEducation(edu.id)}
                                    style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer' }}
                                >
                                    <Trash2 size={18} />
                                </button>
                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>Degree / Program</label>
                                    <input style={styles.input} placeholder="e.g. Bachelor in CS" value={edu.degree} onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)} />
                                </div>
                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>Institute</label>
                                    <input style={styles.input} placeholder="e.g. Tribhuvan University" value={edu.institute} onChange={(e) => updateEducation(edu.id, 'institute', e.target.value)} />
                                </div>
                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>Year of Graduation</label>
                                    <input style={styles.input} placeholder="e.g. 2024" value={edu.year} onChange={(e) => updateEducation(edu.id, 'year', e.target.value)} />
                                </div>
                            </div>
                        ))}
                        <button style={styles.actionBtn} onClick={addEducation}><Plus size={16} /> Add Education</button>
                    </section>

                    {/* Experience Section */}
                    <section ref={sectionsRef.experience} style={styles.formSection}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Briefcase color="var(--color-brand-primary)" /> Job Experience
                        </h3>
                        {cvData.experience.map((exp) => (
                            <div key={exp.id} style={{ padding: '20px', border: '1px solid #F3F4F6', borderRadius: '16px', marginBottom: '16px' }}>
                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>Job Title / Role</label>
                                    <input style={styles.input} placeholder="e.g. UX Designer" onChange={(e) => updateExperience(exp.id, 'role', e.target.value)} />
                                </div>
                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>Company Name</label>
                                    <input style={styles.input} placeholder="e.g. Google" onChange={(e) => updateExperience(exp.id, 'company', e.target.value)} />
                                </div>
                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>Responsibilities</label>
                                    <textarea style={styles.textarea} placeholder="Describe your key achievements..." onChange={(e) => updateExperience(exp.id, 'tasks', e.target.value)}></textarea>
                                </div>
                            </div>
                        ))}
                        <button style={styles.actionBtn} onClick={addExperience}><Plus size={16} /> Add Experience</button>
                    </section>

                    {/* Skills Section */}
                    <section ref={sectionsRef.skills} style={styles.formSection}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Wrench color="var(--color-brand-primary)" /> Technical Skills
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {cvData.skills.map((skill, i) => (
                                <input
                                    key={i}
                                    style={{ ...styles.input, width: '180px' }}
                                    placeholder="e.g. React.js"
                                    value={skill}
                                    onChange={(e) => {
                                        const newSkills = [...cvData.skills];
                                        newSkills[i] = e.target.value;
                                        setCvData({ ...cvData, skills: newSkills });
                                    }}
                                />
                            ))}
                            <button style={{ ...styles.actionBtn, marginTop: 0 }} onClick={() => setCvData({ ...cvData, skills: [...cvData.skills, ''] })}><Plus size={16} /></button>
                        </div>
                    </section>
                </div>
            </main>

            {/* 3. Right Side Live Preview */}
            <section style={styles.preview}>
                <div style={styles.cvPage}>
                    <div style={{ borderBottom: '2px solid var(--color-brand-primary)', paddingBottom: '20px', marginBottom: '20px' }}>
                        <h1 style={{ fontSize: '1.8rem', fontWeight: '900', margin: 0, textTransform: 'uppercase' }}>
                            {cvData.about.firstName || 'YOUR'} {cvData.about.lastName || 'NAME'}
                        </h1>
                        <p style={{ color: 'var(--color-brand-accent)', fontSize: '0.9rem', fontWeight: '700', marginTop: '4px' }}>
                            {cvData.about.designation || 'Your Position'}
                        </p>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '12px', fontSize: '0.7rem', color: '#6B7280' }}>
                            {cvData.about.email && <span>{cvData.about.email}</span>}
                            {cvData.about.phone && <span>{cvData.about.phone}</span>}
                        </div>
                    </div>

                    {/* Summary */}
                    {cvData.about.summary && (
                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ fontWeight: '800', borderBottom: '1px solid #E5E7EB', paddingBottom: '4px', marginBottom: '8px', textTransform: 'uppercase' }}>Summary</h4>
                            <p style={{ lineHeight: '1.6', color: '#4B5563' }}>{cvData.about.summary}</p>
                        </div>
                    )}

                    {/* Experience Preview */}
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ fontWeight: '800', borderBottom: '1px solid #E5E7EB', paddingBottom: '4px', marginBottom: '8px', textTransform: 'uppercase' }}>Experience</h4>
                        {cvData.experience.map(exp => (exp.role || exp.company) && (
                            <div key={exp.id} style={{ marginBottom: '12px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700' }}>
                                    <span>{exp.role || 'Job Title'}</span>
                                    <span>{exp.duration}</span>
                                </div>
                                <p style={{ color: '#6B7280', fontWeight: '600' }}>{exp.company}</p>
                                <p style={{ marginTop: '4px' }}>{exp.tasks}</p>
                            </div>
                        ))}
                    </div>

                    {/* Education Preview */}
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ fontWeight: '800', borderBottom: '1px solid #E5E7EB', paddingBottom: '4px', marginBottom: '8px', textTransform: 'uppercase' }}>Education</h4>
                        {cvData.education.map(edu => (edu.degree || edu.institute) && (
                            <div key={edu.id} style={{ marginBottom: '12px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700' }}>
                                    <span>{edu.degree}</span>
                                    <span>{edu.year}</span>
                                </div>
                                <p style={{ color: '#6B7280' }}>{edu.institute}</p>
                            </div>
                        ))}
                    </div>

                    {/* Skills Preview */}
                    <div>
                        <h4 style={{ fontWeight: '800', borderBottom: '1px solid #E5E7EB', paddingBottom: '4px', marginBottom: '8px', textTransform: 'uppercase' }}>Skills</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {cvData.skills.filter(s => s).map((s, i) => (
                                <span key={i} style={{ backgroundColor: '#F3F4F6', padding: '4px 8px', borderRadius: '4px', fontSize: '0.65rem' }}>{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CVBuilder;
