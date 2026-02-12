import React from 'react';
import { Outlet } from 'react-router-dom';
import JobseekerNavbar from './JobseekerNavbar';
import Footer from '../Footer';

const JobseekerLayout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-subtle)' }}>
            <JobseekerNavbar />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default JobseekerLayout;
