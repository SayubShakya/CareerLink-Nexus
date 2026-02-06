import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Modal from '../common/Modal';
import AuthModal from '../common/AuthModal';

const Layout = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

    const openAuthModal = (mode) => {
        setAuthMode(mode);
        setIsAuthModalOpen(true);
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar openAuthModal={openAuthModal} />
            <main className="flex-grow" style={{ paddingTop: 'var(--header-height)' }}>
                <Outlet />
            </main>
            <Footer />

            <Modal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)}>
                <AuthModal mode={authMode} setMode={setAuthMode} />
            </Modal>
        </div>
    );
};

export default Layout;
