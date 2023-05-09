const { db } = require('../db/Models/relationships');

const init = async () => {
    try {
        await db.authenticate();

        await db.sync({ force: true });
        console.log('db is connected');
    } catch (err) {
        console.log(err);
    }
};

init();
