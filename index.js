const express = require("express");
const todoRoutes = require("./todoRoutes");

const server = express();
server.listen(4101);

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

server.use("/api/users/", todoRoutes.router);

server.get("/", (req, res) => {
    res.send("Welcome to Utility api");
});
console.log("Server is listening at 4101");