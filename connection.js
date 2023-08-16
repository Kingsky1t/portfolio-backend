const mongoose = require("mongoose");
const mongodbUri =
    "mongodb+srv://aqchandra15:yOsyTToSXP6eVAOo@cluster0.45ecjlo.mongodb.net/?retryWrites=true&w=majority";

async function connectDB() {
    try {
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(mongodbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDb connected:", conn.connection.host);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
