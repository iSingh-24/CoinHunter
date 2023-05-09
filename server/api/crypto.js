const router = require('express').Router();
const { createCrypto } = require('./utils');

router.get('/', (req, res) => {
    try {
        res.send('crypto route is hit');
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const createdCrypto = await createCrypto(req.body);
        res.send(createdCrypto);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
