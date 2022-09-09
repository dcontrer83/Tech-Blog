const { User } = require('../models');

const userData = [
    {
        username: 'testing',
        password: 'justTesting',
    },
    {
        username: 'testing2',
        password: 'justTesting2'
    },
    {
        username: 'testing3',
        password: 'justTesting3'
    }
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;

