import React, { useState } from 'react';
import { createCrypto } from '../../utils';

const CreateCrypto = () => {
    const [name, setName] = useState('');

    const onCryptoNameHandler = ({ value }) => {
        console.log(value);
        setName(value);
    };

    const onCryptoSubmit = async (event) => {
        event.preventDefault();

        const createdCrypto = await createCrypto(name);
        console.log(createdCrypto);
    };

    return (
        <div>
            <form action='submit' onSubmit={onCryptoSubmit}>
                <input
                    type='text'
                    placeholder='enter crypto name here'
                    onChange={({ target }) => onCryptoNameHandler(target)}
                    required
                />
                <button type='submit'>Create Crypto</button>
            </form>
        </div>
    );
};

export default CreateCrypto;
