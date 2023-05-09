const router = require('express').Router();
const {
    createUser,
    getUsers,
    getSingleUser,
    updateUserName,
} = require('./utils');

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
    try {
        const { id } = req.params;
        const singleUser = await getSingleUser(id);
        singleUser
            ? res.send(singleUser)
            : res.status(404).send('User Not Found');
    } catch (err) {
        console.log(err);
        res.status(404).send('User not Found');
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

router.put('/:id', async (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        const { id } = req.params;
        const updatedUser = await updateUserName(id, firstName, lastName);

        updatedUser
            ? res.send(updatedUser)
            : res.status(404).send("user doesn't exist");
    } catch (err) {
        console.log(err, 'this is error');
    }
});

module.exports = router;
