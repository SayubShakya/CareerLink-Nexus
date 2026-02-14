import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, RefreshCcw } from 'lucide-react';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F8FAFC',
            fontFamily: 'Inter, sans-serif',
            padding: '20px'
        }}>
            <div style={{
                maxWidth: '500px',
                width: '100%',
                backgroundColor: 'white',
                padding: '48px',
                borderRadius: '24px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                border: '1px solid #E2E8F0',
                textAlign: 'center'
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#FEF2F2',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EF4444',
                    margin: '0 auto 32px auto'
                }}>
                    <AlertCircle size={40} />
                </div>

                <h1 style={{
                    fontSize: '2rem',
                    fontWeight: '900',
                    color: '#0F172A',
                    marginBottom: '16px',
                    letterSpacing: '-0.03em'
                }}>
                    Vault Interrupted
                </h1>

                <p style={{
                    fontSize: '1.1rem',
                    color: '#64748B',
                    lineHeight: '1.6',
                    marginBottom: '40px'
                }}>
                    We encountered an unexpected glitch while fetching your assets. Our team has been notified.
                </p>

                <div style={{
                    backgroundColor: '#F1F5F9',
                    padding: '16px',
                    borderRadius: '12px',
                    marginBottom: '40px',
                    textAlign: 'left'
                }}>
                    <code style={{ fontSize: '0.85rem', color: '#475569', wordBreak: 'break-all' }}>
                        {error.statusText || error.message}
                    </code>
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '14px 24px',
                            backgroundColor: '#0F172A',
                            color: 'white',
                            border: 'none',
                            borderRadius: '12px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            transition: '0.2s'
                        }}
                    >
                        <RefreshCcw size={18} /> Retry Access
                    </button>
                    <Link
                        to="/"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '14px 24px',
                            backgroundColor: 'white',
                            color: '#0F172A',
                            border: '1.5px solid #E2E8F0',
                            borderRadius: '12px',
                            fontWeight: '700',
                            textDecoration: 'none',
                            transition: '0.2s'
                        }}
                    >
                        <ArrowLeft size={18} /> Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
