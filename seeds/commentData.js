const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'OMG I love this test. If you can see me then it is working!',
        blog_id: 1,
        user_id: 2,
    },
    {
        comment_text: 'This is a comment for a post.',
        blog_id: 2,
        user_id: 1,
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;