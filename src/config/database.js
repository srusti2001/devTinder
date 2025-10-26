const mongoose = require('mongoose');

const connectDb = async () => {
    await mongoose.connect(
        "mongodb+srv://01srusti05:namastenode@namastenode.otk6kuu.mongodb.net/NamasteNode"
    );
}

module.exports = connectDb;