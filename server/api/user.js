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

//set up a user route for a singular user

router.get('/:id', async (req, res) => {
    const id = req.params;
    console.log(id, 'here is id');

    res.send('single user route was hit');
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
