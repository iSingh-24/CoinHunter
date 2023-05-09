const router = require('express').Router();
const { createUser } = require('./utils');

router.get('/', (req, res) => {
    try {
        res.send('route in user js');
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
