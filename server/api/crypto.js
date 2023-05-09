const router = require('express').Router();
const { createCrypto, getCrypto } = require('./utils');

router.get('/', async (req, res) => {
    try {
        const allCrypto = await getCrypto();

        res.send(allCrypto);
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
