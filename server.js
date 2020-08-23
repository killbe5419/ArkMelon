const express = require("express");
const path = require("path");
const MongoClient = require("mongodb");

const app = express();
const staticPath = path.join(__dirname,"src");
app.use(express.static(staticPath));

const mongoUrl = "mongodb://localhost:27017/"

app.get("/*",(req,res,next) => {
    if(req.query.type === "pick" || req.query.type === "getPickup") {
        next("route");
    } else {
        res.sendFile(staticPath + "/index.html");
    }
})

app.get("/pickOne",(req,res) => {
    console.log(req.query.poolName);
    pickOne(req.query.poolName,req.query.pickNum)
        .then(doc => {
            console.log(doc);
            res.send(doc);
        })

})

app.get("/pickTen",(req,res) => {
    res.send("pick ten cards");
})

app.get("/getPickup",(req,res) => {
    getPickup(req.query.poolName)
        .then(doc => {
            console.log(doc);
            res.send(doc);
        })
})

app.listen(3333,() => {
    console.log("listening on http://localhost:3333\n");
})

/////////////////////////////////////////////////////////////////////////////

function getPickup(poolName) {
    return new Promise((resolve,reject) => {
        MongoClient.connect(mongoUrl,(err, client) => {
            if(err) reject(err);
            const targetDB = client.db("Arknights");
            const pickup = {
                pickup: true
            }
            targetDB.collection(poolName).find(pickup).toArray((err,result) => {
                if(err) reject(err);
                const obj = {
                    six: [],
                    five: [],
                    four: []
                };
                result.forEach(x => {
                    if(x["rare"] === 6) {
                        obj.six.push(x["name"]);
                    }
                    else if(x["rare"] === 5) {
                        obj.five.push(x["name"]);
                    } else {
                        obj.four.push(x["name"]);
                    }
                })
                resolve(obj);
            })
            client.close().catch();
        })
    })
}

function percentageEvent(g) {
    let item;
    const p = Math.random() * 100;
    if(g <= 50) {
        if(p <= 1) {
            item = {
                rare: 6,
                pickup: true,
            }
        }
        else if(p <= 2) {
            item = {
                rare: 6,
                pickup: false,
            }
        }
        else if(p <= 6) {
            item = {
                rare: 5,
                pickup: true,
            }
        }
        else if(p <= 10) {
            item = {
                rare: 5,
                pickup: false,
            }
        }
        else if(p <= 20) {
            item = {
                rare: 4,
                pickup: true
            }
        }
        else if(p <= 60) {
            item = {
                rare: 4,
                pickup: false,
            }
        } else {
            item = {
                rare: 3,
            }
        }
    } else {
        const p6 = 2 + ((g - 50) * 2);
        const p5 = (100 - p6) * (8 / 98);
        const p4 = (100 - p6) * (50 / 98);
        if(p <= p6/2) {
            item = {
                rare: 6,
                pickup: true,
            }
        }
        else if(p <= p6) {
            item = {
                rare: 6,
                pickup: false,
            }
        }
        else if(p <= p6 + (p5/2)) {
            item = {
                rare: 5,
                pickup: true,
            }
        }
        else if(p <= p6 + p5) {
            item = {
                rare: 5,
                pickup: false,
            }
        }
        else if(p <= p6 + p5 + (p4/5)) {
            item = {
                rare: 4,
                pickup: true,
            }
        }
        else if(p <= p6 + p5 + p4) {
            item = {
                rare: 4,
                pickup: false
            }
        } else {
            item = {
                rare: 3,
            }
        }
    }
    return item;
}

function pickOne(poolName,g) {
    return new Promise((resolve,reject) => {
        MongoClient.connect(mongoUrl,(err, client) => {
            if(err) reject(err);
            const targetDB = client.db("Arknights");
            const item = percentageEvent(g);
            console.log(item);
            targetDB.collection(poolName).find(item).toArray((err,result) => {
                if(err) reject(err);
                const which = Math.floor(Math.random() * result.length);
               if(result[which].rare === 6) {
                   console.log("in 6");
                   result[which]["g"] = 0;
               } else {
                   console.log("in x6");
                   result[which]["g"] = Number(g) + 1;
               }
               console.log(result[which].pickNum);
               resolve(result[which]);
            })
            client.close().catch();
        })
    })
}