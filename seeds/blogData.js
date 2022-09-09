const { Blog } = require('../models');

const blogData = [
    {
        title: 'Trying out Blog',
        content: 'I am testing this blog and hoping that it works.',
        user_id: 1,
    },
    {
        title: 'Testing this title',
        content: 'Does this content show?',
        user_id: 3,
    }
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;