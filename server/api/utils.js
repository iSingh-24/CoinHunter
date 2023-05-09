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

const getCrypto = async () => {
    const allCrypto = await Crypto.findAll();

    return allCrypto;
};

const getUsers = async () => {
    const allUsers = await User.findAll();

    return allUsers;
};

const getSingleUser = async (userId) => {
    const singleUser = await User.findOne({
        where: {
            id: userId,
        },
    });

    return singleUser;
};

const getSingleCrypto = async (cryptoId) => {
    //probably better to use crypto name for this in the future since it will be unique
    const singleCrypto = await Crypto.findOne({
        where: {
            id: cryptoId,
        },
    });

    return singleCrypto;
};

const updateUserName = async (userId, firstName, lastName) => {
    //get the id or name of the user you want to update
    try {
        const userToUpdate = await User.findOne({
            where: {
                id: userId,
            },
        });
        if (userToUpdate) {
            userToUpdate.firstName = firstName;
            userToUpdate.lastName = lastName;
            await userToUpdate.save();
            return userToUpdate;
        } else {
            return null;
        }
    } catch (err) {
        console.log(err);
    }
};

const updateCryptoName = async (cryptoId, name) => {
    try {
        const cryptoToUpdate = await Crypto.findOne({
            where: {
                id: cryptoId,
            },
        });

        if (cryptoToUpdate) {
            cryptoToUpdate.name = name;
            await cryptoToUpdate.save();
            return cryptoToUpdate;
        } else {
            return null;
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    createUser,
    createCrypto,
    getCrypto,
    getUsers,
    getSingleUser,
    getSingleCrypto,
    updateUserName,
    updateCryptoName,
};
