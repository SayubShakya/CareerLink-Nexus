const Role = require('../models/Role');
const AppError = require('../utils/AppError');

class RoleService {
    async findAll() {
        return await Role.findAll();
    }

    async findById(id) {
        const role = await Role.findByPk(id);
        if (!role) {
            throw new AppError('No role found with that ID', 404);
        }
        return role;
    }

    async create(roleData) {
        return await Role.create(roleData);
    }

    async update(id, roleData) {
        const role = await this.findById(id);
        role.name = roleData.name;
        await role.save();
        return role;
    }

    async delete(id) {
        const role = await this.findById(id);
        await role.destroy();
        return true;
    }
}

module.exports = new RoleService();
