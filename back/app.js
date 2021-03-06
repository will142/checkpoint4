require("dotenv").config();
const express = require("express");
const cors = require("cors")
const PORT = process.env.PORT;

const app = express();
app.use(cors({orgin:"*"}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mainRoutes = require("./routes");

app.use("/api", mainRoutes);

app.listen(PORT, () => {
    console.log(`Server is listenning on port ${PORT}`);
});