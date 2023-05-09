import axios from 'axios';

const createUser = async (firstName, lastName) => {
    const { data: createdUser } = await axios.post(
        'http://localhost:3000/api/user',
        { firstName, lastName }
    );
    return createdUser;
};

const createCrypto = async (name) => {
    const { data: createdCrypto } = await axios.post(
        'http://localhost:3000/api/crypto',
        { name }
    );
    return createdCrypto;
};

export { createUser, createCrypto };
