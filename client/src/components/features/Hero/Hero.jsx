import React, { useState } from 'react';
import { Search, MapPin, Briefcase, PlusCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery, 'in', location);
        // Add search logic here
    };

    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Find Your Dream Job</h1>
                <p className="hero-subtitle">
                    Discover thousands of job opportunities from top companies.
                    Your perfect career match is just a search away.
                </p>

                <form className="search-container" onSubmit={handleSearch}>
                    <div className="search-input-group">
                        <Search size={20} />
                        <input
                            type="text"
                            placeholder="Job title or keyword"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="search-input-group">
                        <MapPin size={20} />
                        <input
                            type="text"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="search-btn">
                        Search Jobs
                    </button>
                </form>

                <div className="hero-actions">
                    <button className="btn-primary">
                        <Briefcase size={18} />
                        Find Jobs
                    </button>
                    <button className="btn-secondary">
                        <PlusCircle size={18} />
                        Post a Job
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
