// Set up application
const express = require("express");

const compression = require("compression");


const app = express();
const P = process.env.PORT || 5000;

const htmlRoutes = require("./routes/routeshtml");

const apiRoutes = require("./routes/routesapi");




app.use(compression());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.use("/", htmlRoutes);

app.use(express.static("public"));




app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));