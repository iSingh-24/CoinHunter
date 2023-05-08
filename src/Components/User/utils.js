import axios from 'axios';

const createUser = async (firstName, lastName) => {
    const { data: createdUser } = await axios.post(
        'http://localhost:3000/api/user'
    );
    return createdUser;
};

export { createUser };
