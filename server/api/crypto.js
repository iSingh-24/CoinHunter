const router = require('express').Router();
const Crypto = require('../db/Models/Crypto');

router.get('/', (req, res) => {
    try {
        res.send('crypto route is hit');
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        const createdCrypto = await Crypto.create({ name });
        res.send(createdCrypto);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
