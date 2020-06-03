const express = require("express");
const path = require("path");


const app = express();
const staticPath = path.join(__dirname,"src");
app.use(express.static(staticPath));

app.get("/",(req,res) => {
    res.sendFile(staticPath + "index.html");
})

app.listen(3333,() => {
    console.log("listening on http://localhost:3333\n");
})




