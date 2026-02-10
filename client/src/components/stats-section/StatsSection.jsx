import React from 'react';
import { Briefcase, Users, TrendingUp } from 'lucide-react';
import StatsItem from './StatsItem';
import './StatsItem.css';

const StatsSection = () => {
    const stats = [
        {
            icon: Briefcase,
            number: "10,000+",
            label: "Active Jobs",
            colorVariant: "blue"
        },
        {
            icon: Users,
            number: "50,000+",
            label: "Job Seekers",
            colorVariant: "green"
        },
        {
            icon: TrendingUp,
            number: "5,000+",
            label: "Companies",
            colorVariant: "orange"
        }
    ];

    return (
        <section className="stats-container">
            {stats.map((stat, index) => (
                <StatsItem
                    key={index}
                    icon={stat.icon}
                    number={stat.number}
                    label={stat.label}
                    colorVariant={stat.colorVariant}
                />
            ))}
        </section>
    );
};

export default StatsSection;
