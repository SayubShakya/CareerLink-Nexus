import React, { useState, useEffect } from 'react';
import jobSeekerService from '@/services/jobSeekerService';
import authService from '@/services/authService';
import { toast } from 'react-toastify';
import { ROUTES } from '@/routes/routes';
import { useTheme } from '@/hooks/useTheme';
import {
    User,
    Mail,
    Shield,
    Settings,
    Loader2,
    CheckCircle2,
    Briefcase,
    Target,
    Save,
    UserCircle,
    Lock,
    Eye,
    EyeOff,
    Moon,
    Sun,
    Bell,
    Globe,
    Monitor
} from 'lucide-react';

const MyProfile = () => {
    const { theme, toggleTheme } = useTheme();
    const [activeTab, setActiveTab] = useState('personal'); // 'personal', 'security', 'preferences'
    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        email: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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
            toast.success("Profile saved successfully!");
        } catch (error) {
            console.error("Failed to update profile", error);
            toast.error("Failed to save changes.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#F8FAFC' }}>
            <Loader2 className="animate-spin" size={48} color="#3E61FF" />
        </div>
    );

    return (
        <div className="profile-root">
            <style>{`
                .profile-root {
                    min-height: 100vh;
                    background-color: var(--bg-dashboard);
                    padding-bottom: 80px;
                    font-family: 'Inter', system-ui, sans-serif;
                    transition: background-color 0.3s;
                }

                /* PREMIUM HERO */
                .profile-hero {
                    background: var(--bg-main);
                    padding: 80px;
                    border-radius: 0 0 50px 50px;
                    margin-bottom: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: var(--shadow-premium);
                    border-bottom: 1px solid var(--border-dashboard);
                }

                .hero-visual { display: flex; align-items: center; gap: 40px; }
                .avatar-badge {
                    width: 120px;
                    height: 120px;
                    background: linear-gradient(135deg, #3E61FF 0%, #6366F1 100%);
                    color: white;
                    border-radius: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 3rem;
                    font-weight: 900;
                    box-shadow: 0 20px 40px rgba(62, 97, 255, 0.3);
                    border: 4px solid var(--bg-main);
                }

                .hero-text h1 { font-size: 3.5rem; font-weight: 950; color: var(--text-main); letter-spacing: -0.04em; margin-bottom: 12px; }
                .hero-text p { font-size: 1.1rem; color: var(--text-muted); font-weight: 600; margin: 0; }

                /* SETTINGS CONTENT */
                .settings-grid {
                    max-width: 1100px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 320px 1fr;
                    gap: 60px;
                    padding: 0 80px;
                }

                .side-nav { display: flex; flex-direction: column; gap: 12px; }
                .nav-card {
                    padding: 24px;
                    border-radius: 20px;
                    background: var(--card-dashboard);
                    border: 1px solid var(--border-dashboard);
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    font-weight: 800;
                    color: var(--text-muted);
                    cursor: pointer;
                    transition: 0.2s;
                }
                .nav-card.active { border-color: #3E61FF; color: #3E61FF; background: var(--theme-active-bg, #EBF5FF); }
                .dark-theme .nav-card.active { --theme-active-bg: rgba(62, 97, 255, 0.1); }

                .main-settings-card {
                    background: var(--card-dashboard);
                    border: 1px solid var(--border-dashboard);
                    border-radius: 32px;
                    padding: 48px;
                    box-shadow: var(--shadow-premium);
                }

                .form-section-title {
                    font-size: 1.8rem;
                    font-weight: 950;
                    color: var(--text-main);
                    margin-bottom: 24px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                .form-section-subtitle { font-size: 1rem; color: var(--text-muted); font-weight: 600; margin-bottom: 40px; }

                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
                .full-col { grid-column: 1 / -1; }

                .input-group { display: flex; flex-direction: column; gap: 12px; }
                .input-group label { font-size: 0.85rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
                .input-field {
                    width: 100%;
                    padding: 16px 20px;
                    border: 1.5px solid var(--border-dashboard);
                    border-radius: 16px;
                    background: var(--card-dashboard);
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--text-main);
                    outline: none;
                    transition: 0.2s;
                }
                .input-field:focus { border-color: #3E61FF; background: var(--bg-main); box-shadow: 0 0 0 4px rgba(62, 97, 255, 0.08); }
                .input-field:disabled { 
                    background: var(--bg-dashboard); 
                    color: var(--text-muted); 
                    cursor: not-allowed;
                    opacity: 0.7;
                }

                .email-lock-badge {
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(62, 97, 255, 0.1);
                    color: var(--color-brand-accent);
                    padding: 6px 12px;
                    border-radius: 8px;
                    font-size: 0.65rem;
                    font-weight: 900;
                    letter-spacing: 0.1em;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .pref-card {
                    border: 1px solid var(--border-dashboard);
                    border-radius: 20px;
                    padding: 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 16px;
                    transition: 0.2s;
                }
                .pref-card:hover { border-color: #3E61FF; background: var(--bg-dashboard); }

                .theme-toggle-group {
                    background: var(--bg-dashboard);
                    padding: 6px;
                    border-radius: 14px;
                    display: flex;
                    gap: 4px;
                }
                .theme-btn {
                    padding: 10px 20px;
                    border-radius: 10px;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 800;
                    font-size: 0.85rem;
                    transition: 0.2s;
                    color: var(--text-muted);
                    background: transparent;
                }
                .theme-btn.active { background: var(--bg-main); color: #3E61FF; box-shadow: var(--shadow-premium); }

                .save-btn {
                    margin-top: 48px;
                    padding: 16px 36px;
                    background: var(--text-main);
                    color: var(--bg-main);
                    border: none;
                    border-radius: 16px;
                    font-size: 1rem;
                    font-weight: 850;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    transition: 0.3s;
                }
                .save-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(15, 23, 42, 0.2); }

                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>

            {/* PROFILE HERO */}
            <div className="profile-hero">
                <div className="hero-visual">
                    <div className="avatar-badge">
                        {profile.first_name ? profile.first_name[0].toUpperCase() : 'S'}
                    </div>
                    <div className="hero-text">
                        <h1>{profile.first_name} {profile.last_name}</h1>
                        <p>Nexus Global Community Member</p>
                    </div>
                </div>
            </div>

            {/* SECTIONS GRID */}
            <div className="settings-grid">
                <div className="side-nav">
                    <div
                        className={`nav-card ${activeTab === 'personal' ? 'active' : ''}`}
                        onClick={() => setActiveTab('personal')}
                    >
                        <UserCircle size={22} /> Personal Settings
                    </div>
                    <div
                        className={`nav-card ${activeTab === 'security' ? 'active' : ''}`}
                        onClick={() => setActiveTab('security')}
                    >
                        <Shield size={22} /> Security & Privacy
                    </div>
                    <div
                        className={`nav-card ${activeTab === 'preferences' ? 'active' : ''}`}
                        onClick={() => setActiveTab('preferences')}
                    >
                        <Settings size={22} /> App Preferences
                    </div>
                </div>

                <div className="main-settings-card">
                    {activeTab === 'personal' && (
                        <>
                            <h2 className="form-section-title">
                                <User size={28} color="#3E61FF" strokeWidth={3} /> Personal Details
                            </h2>
                            <p className="form-section-subtitle">Manage your name and contact information across the platform.</p>

                            <form onSubmit={handleSubmit}>
                                <div className="form-grid">
                                    <div className="input-group">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            value={profile.first_name}
                                            onChange={handleChange}
                                            className="input-field"
                                            required
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            value={profile.last_name}
                                            onChange={handleChange}
                                            className="input-field"
                                            required
                                        />
                                    </div>
                                    <div className="input-group full-col">
                                        <label>Email Address</label>
                                        <div style={{ position: 'relative' }}>
                                            <input
                                                type="email"
                                                value={profile.email}
                                                className="input-field"
                                                disabled
                                            />
                                            <span className="email-lock-badge">
                                                <Lock size={12} /> LOCKED
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button className="save-btn" disabled={saving}>
                                    {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </button>
                            </form>
                        </>
                    )}

                    {activeTab === 'security' && (
                        <>
                            <h2 className="form-section-title">
                                <Shield size={28} color="#3E61FF" strokeWidth={3} /> Security Hub
                            </h2>
                            <p className="form-section-subtitle">Keep your account safe and manage how your data is used.</p>

                            <div className="input-group full-col" style={{ marginBottom: '32px' }}>
                                <label>Current Password</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••••••"
                                        className="input-field"
                                    />
                                    <button
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-light)' }}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div className="pref-card">
                                <div>
                                    <div style={{ fontWeight: 850, color: 'var(--text-main)', marginBottom: '4px' }}>Two-Factor Authentication</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Add an extra layer of security to your login.</div>
                                </div>
                                <div style={{ color: 'var(--color-brand-accent)', fontWeight: 900, fontSize: '0.75rem' }}>OFF</div>
                            </div>

                            <div className="pref-card">
                                <div>
                                    <div style={{ fontWeight: 850, color: 'var(--text-main)', marginBottom: '4px' }}>Encrypted Storage</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>All uploaded CV assets are AES-256 encrypted.</div>
                                </div>
                                <Lock size={20} color="var(--color-success)" />
                            </div>
                        </>
                    )}

                    {activeTab === 'preferences' && (
                        <>
                            <h2 className="form-section-title">
                                <Settings size={28} color="var(--color-brand-accent)" strokeWidth={3} /> App Preferences
                            </h2>
                            <p className="form-section-subtitle">Customize your experience and theme across the Nexus platform.</p>

                            <div className="pref-card">
                                <div>
                                    <div style={{ fontWeight: 850, color: 'var(--text-main)', marginBottom: '4px' }}>Platform Theme</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Choose between Light and Dark mode.</div>
                                </div>
                                <div className="theme-toggle-group">
                                    <button
                                        className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
                                        onClick={() => toggleTheme('light')}
                                    >
                                        <Sun size={16} /> Light
                                    </button>
                                    <button
                                        className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
                                        onClick={() => toggleTheme('dark')}
                                    >
                                        <Moon size={16} /> Dark
                                    </button>
                                </div>
                            </div>

                            <div className="pref-card">
                                <div>
                                    <div style={{ fontWeight: 850, color: 'var(--text-main)', marginBottom: '4px' }}>Notification Alerts</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Get email alerts for new job matches.</div>
                                </div>
                                <Bell size={20} color="var(--color-brand-accent)" />
                            </div>

                            <div className="pref-card">
                                <div>
                                    <div style={{ fontWeight: 850, color: 'var(--text-main)', marginBottom: '4px' }}>Preferred Language</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Set your default app language.</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, color: 'var(--text-main)' }}>
                                    <Globe size={18} /> English (US)
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
