import React, { useState, useEffect, useRef } from 'react';
import {
    FileText,
    Upload,
    Plus,
    Download,
    Edit2,
    Trash2,
    MoreVertical,
    FileCheck,
    Loader2
} from 'lucide-react';
import { toast } from 'react-toastify';
import cvService from '@/services/cvService';

const MyCVs = () => {
    const [cvs, setCvs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef(null);

    useEffect(() => {
        fetchCVs();
    }, []);

    const fetchCVs = async () => {
        try {
            const data = await cvService.getAllCVs();
            setCvs(data);
        } catch (error) {
            console.error("Failed to fetch CVs", error);
            toast.error("Could not load your CVs");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this CV?")) return;

        try {
            await cvService.deleteCV(id);
            setCvs(cvs.filter(cv => cv.id !== id));
            toast.success("CV deleted successfully");
        } catch (error) {
            toast.error("Failed to delete CV");
        }
    };

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', file.name);

        setUploading(true);
        try {
            await cvService.uploadCV(formData);
            toast.success("CV uploaded successfully!");
            fetchCVs();
        } catch (error) {
            toast.error("Upload failed: " + (error.response?.data?.message || error.message));
        } finally {
            setUploading(false);
            e.target.value = '';
        }
    };

    const handleDownload = (id) => {
        window.open(`/api/cvs/${id}`, '_blank');
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const now = new Date();
        const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

        if (diffInDays === 0) return 'Today';
        if (diffInDays === 1) return 'Yesterday';
        if (diffInDays < 7) return `${diffInDays} days ago`;
        return date.toLocaleDateString();
    };

    const styles = {
        container: {
            padding: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '32px'
        },
        titleSection: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        },
        title: {
            fontSize: '2rem',
            fontWeight: '900',
            color: 'var(--text-main)',
            letterSpacing: '-0.03em'
        },
        actionBar: {
            display: 'flex',
            gap: '12px'
        },
        primaryBtn: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            backgroundColor: 'var(--color-brand-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontSize: '0.95rem'
        },
        secondaryBtn: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            backgroundColor: 'white',
            color: 'var(--text-main)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontSize: '0.95rem',
            position: 'relative'
        },
        cvGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px'
        },
        cvCard: {
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '20px',
            border: '1px solid var(--border-subtle)',
            position: 'relative',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'default',
            display: 'flex',
            flexDirection: 'column'
        },
        iconBox: (type) => ({
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            backgroundColor: type === 'platform' ? '#EBF5FF' : '#F3F4F6',
            color: type === 'platform' ? '#3B82F6' : '#6B7280',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px'
        }),
        cvTitle: {
            fontSize: '1.1rem',
            fontWeight: '800',
            color: 'var(--text-main)',
            marginBottom: '8px',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: '1.4'
        },
        cvMeta: {
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
        },
        tag: (type) => ({
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '0.7rem',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            backgroundColor: type === 'platform' ? '#DBEAFE' : '#E5E7EB',
            color: type === 'platform' ? '#1E40AF' : '#374151',
            marginBottom: '16px',
            display: 'inline-block'
        }),
        actionMenu: {
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '8px',
            marginTop: 'auto',
            paddingTop: '20px',
            borderTop: '1px solid #F3F4F6'
        },
        roundBtn: {
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            background: '#F9FAFB',
            color: '#4B5563',
            cursor: 'pointer',
            transition: 'all 0.2s'
        }
    };

    if (loading) return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', flexDirection: 'column', gap: '16px' }}>
            <Loader2 className="animate-spin" size={48} color="var(--color-brand-primary)" />
            <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Loading your secure vault...</p>
        </div>
    );

    return (
        <div style={styles.container}>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept=".pdf,.doc,.docx"
                onChange={handleUpload}
            />

            <div style={styles.header}>
                <div style={styles.titleSection}>
                    <FileText size={40} color="var(--color-brand-primary)" strokeWidth={2.5} />
                    <h1 style={styles.title}>CV Storage</h1>
                </div>
                <div style={styles.actionBar}>
                    <button
                        style={styles.secondaryBtn}
                        className="hover-lift"
                        onClick={() => fileInputRef.current.click()}
                        disabled={uploading}
                    >
                        {uploading ? <Loader2 className="animate-spin" size={18} /> : <Upload size={18} />}
                        {uploading ? 'Uploading...' : 'Upload PDF'}
                    </button>
                    <button
                        style={styles.primaryBtn}
                        className="hover-lift"
                        onClick={() => window.location.href = '/dashboard/jobseeker/cv-builder'}
                    >
                        <Plus size={18} />
                        Create New
                    </button>
                </div>
            </div>

            <div style={styles.cvGrid}>
                {cvs.map((cv) => (
                    <div key={cv.id} style={styles.cvCard} className="cv-card-hover">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div style={styles.tag(cv.type)}>
                                {cv.type === 'platform' ? 'Platform Builder' : 'External Upload'}
                            </div>
                            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}>
                                <MoreVertical size={20} />
                            </button>
                        </div>

                        <div style={styles.iconBox(cv.type)}>
                            {cv.type === 'platform' ? <FileCheck size={24} /> : <FileText size={24} />}
                        </div>

                        <h3 style={styles.cvTitle}>{cv.title}</h3>

                        <div style={styles.cvMeta}>
                            <span>Updated {formatDate(cv.updated_at)}</span>
                        </div>

                        <div style={styles.actionMenu}>
                            {cv.type === 'uploaded' && (
                                <button
                                    style={styles.roundBtn}
                                    className="action-btn-hover"
                                    title="Download PDF"
                                    onClick={() => handleDownload(cv.id)}
                                >
                                    <Download size={18} />
                                </button>
                            )}
                            {cv.type === 'platform' && (
                                <button
                                    style={{ ...styles.roundBtn, color: 'var(--color-brand-primary)' }}
                                    className="action-btn-hover"
                                    title="Edit in Builder"
                                    onClick={() => window.location.href = `/dashboard/jobseeker/cv-builder?id=${cv.id}`}
                                >
                                    <Edit2 size={18} />
                                </button>
                            )}
                            <button
                                style={{ ...styles.roundBtn, color: '#EF4444' }}
                                className="action-btn-hover"
                                title="Delete"
                                onClick={() => handleDelete(cv.id)}
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}

                {/* Empty State Action */}
                <div
                    style={{ ...styles.cvCard, border: '2px dashed #E2E8F0', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px', cursor: 'pointer' }}
                    className="dashed-hover"
                    onClick={() => fileInputRef.current.click()}
                >
                    <div style={{ backgroundColor: '#F8FAFC', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#94A3B8' }}>
                        <Plus size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#64748B', marginBottom: '8px' }}>Store Another CV</h3>
                    <p style={{ fontSize: '0.85rem', color: '#94A3B8', maxWidth: '200px' }}>Upload a file or create one with our builder.</p>
                </div>
            </div>

            <style>{`
                .cv-card-hover:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                    border-color: var(--color-brand-primary);
                }
                .action-btn-hover:hover {
                    background-color: #F3F4F6 !important;
                    transform: scale(1.1);
                }
                .dashed-hover:hover {
                    border-color: var(--color-brand-primary) !important;
                    background-color: #F8FAFC !important;
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default MyCVs;
