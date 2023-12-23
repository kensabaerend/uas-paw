const express = require("express")
const cors = require("cors")
const db = require("./app/models")
const app = express()
const connectDB = require("./app/config/connectDB");

const corsOptions = {
    origin: "*"
}

// register cors middleware

app.use(cors(corsOptions));
app.use(express.json());

// konek ke database
    // const mongooseConfig = {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // }

    // db.mongoose.connect(db.url, mongooseConfig);
connectDB()


// memanggil routes etalase
require("./app/routes/etalase.route")(app);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on port http://localhost:${PORT}`));