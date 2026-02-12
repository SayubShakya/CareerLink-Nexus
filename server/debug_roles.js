const Role = require('./src/models/Role');
const JobSeeker = require('./src/models/JobSeeker');
const Employer = require('./src/models/Employer');
const sequelize = require('./src/config/sequelize');

async function debug() {
    try {
        await sequelize.authenticate();
        const roles = await Role.findAll();
        console.log('Roles in DB:', roles.map(r => r.name));
    } catch (err) {
        console.error(err);
    } finally {
        process.exit();
    }
}

debug();
