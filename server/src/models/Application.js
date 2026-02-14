const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const JobSeeker = require('./JobSeeker');
const CV = require('./CV');

const Application = sequelize.define('Application', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    job_id: {
        type: DataTypes.STRING(255), // Storing ID from frontend (e.g. "montessori-teacher") or real UUID if available
        allowNull: false,
    },
    seeker_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: JobSeeker,
            key: 'id'
        }
    },
    cv_id: {
        type: DataTypes.UUID,
        allowNull: true, // Can act as snapshot or reference
        references: {
            model: CV,
            key: 'id'
        }
    },
    status: {
        type: DataTypes.ENUM('pending', 'reviewed', 'shortlisted', 'rejected', 'hired'),
        defaultValue: 'pending'
    },
    cover_letter: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'applications',
    timestamps: true,
    createdAt: 'applied_at',
    updatedAt: 'updated_at'
});

// Associations
JobSeeker.hasMany(Application, { foreignKey: 'seeker_id' });
Application.belongsTo(JobSeeker, { foreignKey: 'seeker_id' });

CV.hasMany(Application, { foreignKey: 'cv_id' });
Application.belongsTo(CV, { foreignKey: 'cv_id' });

module.exports = Application;
