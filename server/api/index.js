const user = require('./user');
const crypto = require('./crypto');
const router = require('express').Router();

router.use('/user', user);
router.use('/crypto', crypto);

module.exports = router;
