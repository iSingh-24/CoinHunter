const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.send('route in user js');
    } catch (err) {
        console.log(err);
    }
});

router.post('/', (req, res) => {
    try {
        res.send('this route is properly being hit');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
