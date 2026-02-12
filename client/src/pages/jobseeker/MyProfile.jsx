import React, { useState, useEffect } from 'react';
import jobSeekerService from '@/services/jobSeekerService';
import authService from '@/services/authService';
import { toast } from 'react-toastify';
import { Building2, Mail, Phone, MapPin, User, FileText } from 'lucide-react';

const MyProfile = () => {
    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        email: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await jobSeekerService.getProfile();
                setProfile({
                    first_name: data.first_name || '',
                    last_name: data.last_name || '',
                    email: data.email || ''
                });
            } catch (error) {
                console.error("Failed to fetch profile", error);
                toast.error("Could not load profile data.");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const updatedUser = await jobSeekerService.updateProfile(profile);
            authService.updateLocalStorageUser(updatedUser);
            toast.success("Profile updated successfully!");
        } catch (error) {
            console.error("Failed to update profile", error);
            toast.error("Failed to update profile.");
        } finally {
            setSaving(false);
        }
    };

    const styles = {
        container: {
            maxWidth: '800px',
            margin: '40px auto',
            padding: '0 20px'
        },
        header: {
            marginBottom: '30px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '20px'
        },
        title: {
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--color-brand-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
        },
        card: {
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-subtle)'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px'
        },
        fullWidth: {
            gridColumn: '1 / -1'
        },
        formGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
        },
        label: {
            fontSize: '0.9rem',
            fontWeight: '600',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        input: {
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid var(--border-subtle)',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border-color 0.2s',
            width: '100%'
        },
        textarea: {
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid var(--border-subtle)',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border-color 0.2s',
            width: '100%',
            minHeight: '120px',
            resize: 'vertical'
        },
        button: {
            padding: '14px 28px',
            backgroundColor: 'var(--color-brand-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '30px',
            transition: 'background-color 0.2s',
            alignSelf: 'flex-start'
        },
        disabledInput: {
            backgroundColor: '#F7FAFC',
            color: '#718096',
            cursor: 'not-allowed'
        }
    };

    if (loading) return <div style={{ textAlign: 'center', padding: '60px' }}>Loading profile...</div>;

    return (
        <div style={styles.container} className="animate-fade-in">
            <div style={styles.header}>
                <h1 style={styles.title}>
                    <User size={32} strokeWidth={2.5} />
                    My Profile
                </h1>
                <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Manage your personal details and account settings.</p>
            </div>

            <div style={styles.card}>
                <form onSubmit={handleSubmit}>
                    <div style={styles.grid}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>First Name</label>
                            <input
                                type="text"
                                name="first_name"
                                value={profile.first_name}
                                onChange={handleChange}
                                style={styles.input}
                                placeholder="Enter your first name"
                                required
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Last Name</label>
                            <input
                                type="text"
                                name="last_name"
                                value={profile.last_name}
                                onChange={handleChange}
                                style={styles.input}
                                placeholder="Enter your last name"
                                required
                            />
                        </div>

                        <div style={{ ...styles.formGroup, ...styles.fullWidth }}>
                            <label style={styles.label}>
                                <Mail size={16} />
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                style={{ ...styles.input, ...styles.disabledInput }}
                                disabled
                                title="Email address cannot be changed."
                            />
                            <p style={{ fontSize: '0.8rem', color: '#E53E3E', marginTop: '4px' }}>
                                Email cannot be edited for security reasons.
                            </p>
                        </div>


                    </div>

                    <button
                        type="submit"
                        style={{ ...styles.button, opacity: saving ? 0.7 : 1 }}
                        disabled={saving}
                    >
                        {saving ? 'Saving Changes...' : 'Update Profile'}
                    </button>
                </form>
            </div>

            <style>{`
                ::placeholder { color: #A0AEC0; }
                input:focus, textarea:focus {
                    border-color: var(--color-brand-primary) !important;
                    box-shadow: 0 0 0 3px rgba(62, 97, 255, 0.1);
                }
                @media (max-width: 768px) {
                    .grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
};

export default MyProfile;
