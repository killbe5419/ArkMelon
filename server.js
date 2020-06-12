const express = require("express");
const path = require("path");


const app = express();
const staticPath = path.join(__dirname,"src");
app.use(express.static(staticPath));

app.get("/",(req,res) => {
    res.sendFile(staticPath + "index.html");
})

app.get("/search", (req,res) => {
    console.log(req.query);
    res.send("/404");
})

app.get("/404",(req,res) => {
    res.sendFile(staticPath + "/pages/404.html");
})

app.get("/operators",(req,res) => {
    res.sendFile(staticPath + "/pages/gameData/operators.html");
})

app.get("/enemies",(req,res) => {
    res.sendFile(staticPath + "/pages/gameData/enemies.html");
})

app.get("/clothes",(req,res) => {
    res.sendFile(staticPath + "/pages/gameData/clothes.html");
})

app.get("/maps",(req,res) => {
    res.sendFile(staticPath + "/pages/gameData/maps.html");
})

app.get("/themes",(req,res) => {
    res.sendFile(staticPath + "/pages/gameData/themes.html");
})

app.get("/events",(req,res) => {
    res.sendFile(staticPath + "/pages/gameData/events.html");
})

app.get("/pools",(req,res) => {
    res.sendFile(staticPath + "/pages/gameData/pools.html");
})

app.get("/items",(req,res) => {
    res.sendFile(staticPath + "/pages/gameData/items.html");
})

app.listen(3333,() => {
    console.log("listening on http://localhost:3333\n");
})