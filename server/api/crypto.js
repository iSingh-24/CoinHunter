const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.send('crypto route is hit');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
