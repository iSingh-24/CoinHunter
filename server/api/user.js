const router = require('express').Router();
const { createUser, getUsers } = require('./utils');

router.get('/', async (req, res) => {
    try {
        const allUsers = await getUsers();

        res.send(allUsers);
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const createdUser = await createUser(req.body);
        res.send(createdUser);
    } catch (err) {
        console.log('this is the error', err);
    }
});

module.exports = router;
