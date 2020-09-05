const express = require("express");
const path = require("path");
const MongoClient = require("mongodb");

const app = express();
const staticPath = path.join(__dirname,"src");
app.use(express.static(staticPath));

const mongoUrl = "mongodb://localhost:27017/";
const mongoOptions = { useUnifiedTopology: true };
const dbName = "Arknights";
const poolDB = "Arknights_pools(zh-cn)";

app.get("/*",(req,res,next) => {
    if( req.query.type === "pick" ||
        req.query.type === "getPickup" ||
        req.query.type === "calculation" ||
        req.query.type === "search"
    ) {
        next("route");
    } else {
        res.sendFile(staticPath + "/index.html");
    }
})

app.get("/getPickup",(req,res) => {
    console.log(req.query);
    getPickup(req.query.poolName)
        .then(doc => {
            doc.type = percentage.check(doc);
            res.send(doc);
        })
        .catch(console.error);
})

app.get("/searchName",(req,res) => {
    console.log(req.query);
    searchName(req.query.poolName,req.query.name)
        .then(doc => {
            res.send(Number(doc) !== 0);
        })
})

app.get("/getPoolList",(req,res) => {
    console.log(req.query);
    getPoolList(req.query.poolType)
        .then(doc => {
            res.send(doc);
        })
        .catch(console.error);
})

app.get("/pickOne",(req,res) => {
    console.log(req.query);
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

app.get("/calc",(req,res) => {
    console.log(req.query);
    calculation(req.query.poolName,req.query.target,req.query.num)
        .then(doc => {
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
            this.use = this.double5;
            return "double5";
        }
        else if(info.six.length === 2 && info.five.length === 1 && info.four.length === 0) {
            this.use = this.limit;
            return "limit";
        }
        else if(info.four.length === 0){
            this.use = this.no4;
            return "no4";
        } else {
            this.use = this.normal;
            return "normal";
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
    no4: function(g) {
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

async function getPickup(poolName) {
    return new Promise((resolve, reject) =>  {
        MongoClient
            .connect(mongoUrl,mongoOptions)
            .then(client => {
                client.db(poolDB)
                    .collection(poolName)
                    .find( { pickup: true } )
                    .toArray((err,result) => {
                        if(err) reject(err);
                        const obj = {
                            six: [],
                            five: [],
                            four: [],
                            other:[]
                        };
                        result.forEach(x => {
                            if(x.rare === 6) {
                                obj.six.push(x.name);
                            }
                            else if(x.rare === 5) {
                                obj.five.push(x.name);
                            } else if(x.rare === 4) {
                                obj.four.push(x.name);
                            } else {
                                obj.other.push(x.name);
                            }
                        })
                        resolve(obj);
                        client.close();
                    });
            })
    })
}

async function searchName(poolName, targetName) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(mongoUrl,mongoOptions)
            .then(client => {
                client.db(poolDB)
                    .collection(poolName)
                    .find({ name: targetName })
                    .toArray( (err,result) => {
                        if(err) reject(err);
                        resolve(result.length);
                        client.close();
                    })
            })
    })
}

async function getPoolList (poolType) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(mongoUrl,mongoOptions)
            .then(client => {
                let item;
                if(poolType === "all") {
                    item = {};
                } else {
                    item = { type: poolType };
                }
                client.db(dbName)
                    .collection("poolList")
                    .find( item )
                    .toArray((err,result) => {
                        if(err) reject(err);
                        if(poolType === "all") {
                            const tmp = {
                                regular: [],
                                limit: [],
                                event: []
                            };
                            result.forEach( x => {
                                if(x.type === "eventPool") {
                                    tmp.event.push(x);
                                }
                                else if(x.type === "limitPool") {
                                    tmp.limit.push(x);
                                } else {
                                    tmp.regular.push(x);
                                }
                            })
                            resolve(tmp);
                        } else {
                            resolve(result);
                        }
                        client.close();
                    })
            })
    })
}

async function pickOne(poolName,g) {
    return new Promise((resolve,reject) => {
        MongoClient.connect(mongoUrl,mongoOptions)
            .then(client => {
                if(typeof percentage.use !== "function") {
                    resolve("refresh");
                    client.close();
                } else {
                    const item = percentage.use(g);
                    client.db(poolDB)
                        .collection(poolName)
                        .find(item)
                        .toArray((err,result) => {
                            if(err) reject(err);
                            const which = Math.floor(Math.random() * result.length);
                            if(result[which].rare === 6) {
                                result[which]["g"] = 0;
                            } else {
                                result[which]["g"] = Number(g) + 1;
                            }
                            resolve(result[which]);
                            client.close();
                    })
                }
            })
    })
}

async function pickTen(poolName, g) {
    let gTmp = g;
    let outArr = [];

    for(let i=0;i<10;i++) {
        outArr.push(await pickOne(poolName,gTmp));
        if(outArr[i] === "refresh") {
            return "refresh";
        }
        outArr[i].id = i;
        gTmp = outArr[i].g;
    }
    return {
        array: outArr,
        g: gTmp
    };
}

async function calculation(poolName, target, num) {
    let gTmp = 0;
    let outArr = [];
    let count = 0;
    let i = 0;
    let six = 0, sixArr =[];
    let five = 0, fiveArr = [];
    let four = 0, fourArr = [];
    let three = 0, threeArr = [];
    const overflow = 6000;
    while(i < overflow) {
        outArr.push(await pickOne(poolName, gTmp));
        if(outArr[i] === "refresh") {
            return "refresh";
        }
        gTmp = outArr[i].g;
        outArr[i].id = i;
        if(outArr[i].rare === 6) {
            six ++;
            sixArr.push(outArr[i]);
        }
        else if(outArr[i].rare === 5) {
            five ++;
            fiveArr.push(outArr[i]);
        }
        else if(outArr[i].rare === 4) {
            four ++;
            fourArr.push(outArr[i]);
        } else {
            three ++;
            threeArr.push(outArr[i]);
        }
        if(outArr[i].name === target) {
            count ++;
        }
        //console.log(`pick: ${i} name:${outArr[i].name} count: ${count}`);
        if(count === Number(num)) {
            //console.log(`calculation finished!`);
            const p = (count / (i + 1));
            return {
                array: outArr,
                pickNum: i+1,
                six:{
                    num: six,
                    arr: sixArr,
                },
                five:{
                    num: five,
                    arr: fiveArr,
                },
                four:{
                    num: four,
                    arr: fourArr,
                },
                three:{
                    num: three,
                    arr: threeArr,
                },
                count: count,
                percentage: p,
                overflow: false
            }
        }
        if(i === (overflow - 1)) {
            //console.log(`overflow!`);
            const p = (count / (i + 1));
            return {
                array: outArr,
                pickNum: i+1,
                six: {
                    num: six,
                    arr: []
                },
                five: {
                    num: five,
                    arr: []
                },
                four: {
                    num: four,
                    arr: []
                },
                three: {
                    num: three,
                    arr: []
                },
                count: count,
                percentage: p,
                overflow: true
            }
        }
        i++;
    }
}