const express = require("express");
const path = require("path");
const MongoClient = require("mongodb");

const app = express();
const staticPath = path.join(__dirname,"src");
app.use(express.static(staticPath));

const mongoUrl = "mongodb://localhost:27017/";

app.get("/*",(req,res,next) => {
    if(req.query.type === "pick" || req.query.type === "getPickup") {
        next("route");
    } else {
        res.sendFile(staticPath + "/index.html");
    }
})

app.get("/pickOne",(req,res) => {
    pickOne(req.query.poolName,req.query.g)
        .then(doc => {
            res.send(doc);
        })
})

app.get("/pickTen",(req,res) => {
    console.log(req.query);
    pickTen(req.query.poolName,req.query.g)
        .then(doc => {
            res.send(doc);
        })
})

app.get("/getPickup",(req,res) => {
    getPickup(req.query.poolName)
        .then(doc => {
            percentage.check(doc);
            res.send(doc);
        })
})

app.listen(3333,() => {
    console.log("listening on http://localhost:3333\n");
})

/////////////////////////////////////////////////////////////////////////////

const percentage = {
    check: function (info) {
        if(info.six.length === 0 && info.five.length === 2 && info.four.length === 0) {
            console.log("double5");
            this.use = this.double5;
        }
        else if(info.six.length === 2 && info.five.length === 1 && info.four.length === 0) {
            console.log("limit");
            this.use = this.limit;
        } else {
            console.log("normal");
            this.use = this.normal;
        }
    },
    double5: function (g) {
        let item;
        const p = Math.random() * 100;
        if(g <= 50) {
            if(p <= 2) {
                item = {
                    rare: 6,
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
            else if(p <= 60) {
                item = {
                    rare: 4,
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
            if(p <= p6 ) {
                item = {
                    rare: 6,
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
            else if(p <= p6 + p5 + p4) {
                item = {
                    rare: 4,
                }
            } else {
                item = {
                    rare: 3,
                }
            }
        }
        return item;
    },
    limit: function (g) {
        let item;
        const p = Math.random() * 100;
        if(g <= 50) {
            if(p <= 1.5) {
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
            if(p <= p6 * 0.75) {
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
    },
    normal: function (g) {
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
            if(p <= p6 * 0.5) {
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
}

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
                    four: [],
                };
                result.forEach(x => {
                    if(x["rare"] === 6) {
                        obj.six.push(x["name"]);
                    }
                    else if(x["rare"] === 5) {
                        obj.five.push(x["name"]);
                    } else if(x["rare"] === 4) {
                        obj.four.push(x["name"]);
                    } else {
                        obj.other.push(x["name"]);
                    }
                })
                resolve(obj);
            })
            client.close().catch();
        })
    })
}


function pickOne(poolName,g) {
    return new Promise((resolve,reject) => {
        MongoClient.connect(mongoUrl,(err, client) => {
            if(err) reject(err);
            const targetDB = client.db("Arknights");
            const item = percentage.use(g);
            targetDB.collection(poolName).find(item).toArray((err,result) => {
                if(err) reject(err);
                const which = Math.floor(Math.random() * result.length);
               if(result[which].rare === 6) {
                   result[which]["g"] = 0;
               } else {
                   result[which]["g"] = Number(g) + 1;
               }
               resolve(result[which]);
            })
            client.close().catch();
        })
    })
}

async function pickTen(poolName, g) {
    let gTmp = g;
    let outArr = [];

    for(let i=0;i<10;i++) {
        outArr.push(await pickOne(poolName,gTmp));
        outArr[i].id = i;
        gTmp = outArr[i].g;
    }

    return {
        array: outArr,
        g: gTmp
    };
}