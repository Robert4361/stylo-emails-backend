const express = require("express")
require("dotenv").config()

const server = express()
const port = process.env.PORT | 3003;

server.get("/", (req, res) => {
    res.json({message: "Hello this is microservice for sending emails!"})
})

server.listen(port, () => {
    console.log("Server listening on port " + port)
})