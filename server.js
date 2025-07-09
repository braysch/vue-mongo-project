const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json()); // needed to read req body
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});