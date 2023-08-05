const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const server = express();



server.listen(4000,()=>{
    console.log("Server started on port 4000")
})