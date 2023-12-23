const mongoose = require("mongoose");
const db = require("../models")


module.exports = connectDB = async () => {
    try {
        const conn = await mongoose.connect(db.url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB Connected:${conn.connection.host}`)
    } catch (error){
        console.log(error)
        process.exit(1)
    }
}



