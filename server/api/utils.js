const axios = require('axios');
const { User } = require('../db/Models/relationships');
const { Crypto } = require('../db/Models/relationships');

const createUser = async (user) => {
    const { firstName, lastName } = user;
    const createdUser = await User.create({ firstName, lastName });
    return createdUser;
};

const createCrypto = async (crypto) => {
    const { name } = crypto;
    const createdCrypto = await Crypto.create({ name });
    return createdCrypto;
};
module.exports = { createUser, createCrypto };
