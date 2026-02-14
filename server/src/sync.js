const sequelize = require('./config/sequelize');
const Role = require('./models/Role');
const JobSeeker = require('./models/JobSeeker');
const Employer = require('./models/Employer');
const CV = require('./models/CV');
const Application = require('./models/Application');

const syncDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connected to database.');

        // Sync models (Order matters for foreign keys)
        await Role.sync({ alter: true }); // Updates table safely without dropping data
        await JobSeeker.sync({ alter: true });
        await Employer.sync({ alter: true });
        await CV.sync({ alter: true });
        await Application.sync({ alter: true });

        console.log('✅ All tables synced successfully.');

        // Rename 'employeer' to 'employer' if exists
        const oldRole = await Role.findOne({ where: { name: 'employeer' } });
        if (oldRole) {
            oldRole.name = 'employer';
            await oldRole.save();
            console.log('✅ Renamed role "employeer" to "employer".');
        }

        // Seed roles if not exist
        const count = await Role.count();
        if (count === 0) {
            await Role.bulkCreate([
                { name: 'job_seeker' },
                { name: 'employer' }
            ]);
            console.log('✅ Default roles seeded.');
        }

    } catch (error) {
        console.error('❌ Database sync failed:', error);
    } finally {
        // Close connection if standalone script, but usually keep open for server
        // await sequelize.close(); 
    }
};

if (require.main === module) {
    syncDatabase();
}

module.exports = syncDatabase;
