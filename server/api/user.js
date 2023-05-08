const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.send('route in user js');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
