const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("MongoDB connected Successfully");
}).catch((err) => {
    console.log("MongoDB connection Failed!!",err);
})
