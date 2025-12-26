const express = require("express");
const UserRoute = require("./routing/user.route");

const app = express();

app.use(express.json());

app.use("/api", UserRoute);

app.listen(8080, () => {
    console.log("Server run on port 8080");
})