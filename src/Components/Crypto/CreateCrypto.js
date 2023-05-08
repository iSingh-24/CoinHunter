import React, { useState } from 'react';

const CreateCrypto = () => {
    const [name, setName] = useState('');

    const onCryptoNameHandler = ({ value }) => {
        console.log(value);
        setName(value);
    };

    const onCryptoSubmit = (event) => {
        event.preventDefault();
        console.log('Crypto submit getting hit');
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
