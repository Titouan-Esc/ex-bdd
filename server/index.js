const express = require("express");
const cors = require("cors");
const corsOption = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSucessStatus: 200
};

const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

require("dotenv/config");

const postsRoute = require("./routes/routes");

app.use("/api/v1/posts/", postsRoute);
app.use(cors(corsOption));

app.get("/", (req,res) => {
    res.send("<h1>Hello World !</h1>");
});

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        return console.log("Connected to MongoDB");
    }
)




app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});