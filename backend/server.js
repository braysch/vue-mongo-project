const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // needed to read req body
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

const port = process.env.port || 3000;

async function connectDB() {
    mongoose.connect("mongodb://localhost:27017/VueProject", {
        dbName: "vue-project",
    });
    console.log("Connected to MongoDB");
}

connectDB().catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});