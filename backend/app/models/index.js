const dbConfig = require("../config/database");
const mongoose = require("mongoose");

module.exports = {
    mongoose,
    url: dbConfig.url,
    etalase: require('./etalase.model.js')(mongoose)
}

