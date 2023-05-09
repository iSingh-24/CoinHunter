const router = require('express').Router();
const {
    createCrypto,
    getCrypto,
    getSingleCrypto,
    updateCryptoName,
} = require('./utils');

router.get('/', async (req, res) => {
    try {
        const allCrypto = await getCrypto();

        res.send(allCrypto);
    } catch (err) {
        console.log(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const singleCrypto = await getSingleCrypto(id);

        singleCrypto
            ? res.send(singleCrypto)
            : res.status(404).send('Crypto was not in database');
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

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const updatedCrypto = await updateCryptoName(id, name);
        updatedCrypto
            ? res.send(updatedCrypto)
            : res.status(404).send("crypto doesn't exist in database");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
