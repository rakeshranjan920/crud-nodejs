const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://rakeshranjan920:bim2014004_123@cluster0.42gca.mongodb.net/employee?retryWrites=true&w=majority'
const connectDB = async () => {
    const connection = await mongoose.connect(mongoURI , {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false

    });

    console.log(`MongoDB connected ${connection.connection.host}`)
};

module.exports = connectDB;
