import React from 'react';
import './StatsItem.css';

const StatsItem = ({ icon: Icon, number, label, colorVariant }) => {
    return (
        <div className={`stats-item ${colorVariant}`}>
            <div className="stats-icon-wrapper">
                <Icon size={28} strokeWidth={2.5} />
            </div>
            <h3 className="stats-number">{number}</h3>
            <p className="stats-label">{label}</p>
        </div>
    );
};

export default StatsItem;
