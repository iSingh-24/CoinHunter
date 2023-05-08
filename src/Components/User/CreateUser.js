import React, { useState } from 'react';
import { createUser } from './utils';

const CreateUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onFirstNameChange = ({ value }) => {
        console.log(value, 'here is first name value');
        setFirstName(value);
    };

    const onLastNameChange = ({ value }) => {
        console.log('here is last name value', value);
        setLastName(value);
    };

    const onSubmitUser = async (event) => {
        event.preventDefault();
        const createdUser = await createUser(firstName, lastName);
        console.log(createdUser, 'here is created user');
        console.log('submit handler is being hit');
    };
    return (
        <div>
            <form action='submit' onSubmit={onSubmitUser}>
                <input
                    type='text'
                    placeholder='enter first name here'
                    onChange={({ target }) => onFirstNameChange(target)}
                    required
                />
                <input
                    type='text'
                    placeholder='enter last name here'
                    onChange={({ target }) => onLastNameChange(target)}
                    required
                />
                <button>Create User</button>
            </form>
        </div>
    );
};

export default CreateUser;
