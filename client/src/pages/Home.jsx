import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/common/Button';

export default function Home() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <main style={{ flex: 1 }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>

                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-gray-900)' }}>
                        Welcome to CareerLink
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-600)', marginBottom: '2rem' }}>
                        Your gateway to amazing career opportunities
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <Button>Browse Jobs</Button>
                        <Button variant="outline">Post a Job</Button>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
