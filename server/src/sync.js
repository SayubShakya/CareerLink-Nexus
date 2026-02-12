const sequelize = require('./config/sequelize');
const Role = require('./models/Role');

const syncDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connected to database.');

        // Sync models
        await Role.sync({ alter: true }); // Updates table safely without dropping data
        console.log('✅ Role table synced successfully.');

        // Seed roles if not exist
        // Seed roles if not exist
        const count = await Role.count();
        if (count === 0) {
            await Role.bulkCreate([
                { name: 'job_seeker' },
                { name: 'employeer' }
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
