const router = require('express').Router();
const { User } = require('../db/Models/relationships');

router.get('/', (req, res) => {
    try {
        res.send('route in user js');
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        const createdUser = await User.create({ firstName, lastName });
        res.send(createdUser);
    } catch (err) {
        console.log('this is the error', err);
    }
});

module.exports = router;
