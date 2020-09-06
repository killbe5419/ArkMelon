const fs = require("fs");
const csvtojson = require("csvtojson");
const path = require("path");
const MongoClient = require("mongodb");

const dirPath = "../../../data/csv/pools_csv/regularPools";
const mongoUrl = "mongodb://localhost:27017/";
const mongoOptions = { useUnifiedTopology: true };
const dbName = "Arknights_pools(zh-cn)";

function getName ( dirPath ) {
    return new Promise((resolve,reject) => {
        fs.readdir(dirPath,{},((err, files) => {
            if(err) reject(err);
            files.shift();
            resolve(files);
        }))
    })
}

async function csv2json ( dirPath, nameArray ) {
    let unit = [];
    for await (const x of nameArray) {
        let tmp = await csvtojson().fromFile(path.join(dirPath, x));
        await unit.push({
            name: x.split(".")[0],
            arr: tmp
        });
    }
    return unit;
}

async function dataProcess(array) {
    for await(const x of array) {
        x.rare = Number(x.rare);
        x.pickup = x.pickup !== "FALSE";
    }
}

function insertToDb (data) {
    return new Promise((resolve, reject) =>  {
        MongoClient.connect(mongoUrl,mongoOptions)
            .then(client => {
                if(data.hasOwnProperty("name")) {
                    client.db(dbName)
                        .collection(data.name)
                        .insertMany(data.arr,{},(err,res) => {
                            if(err) reject(err);
                            resolve(res.insertedCount);
                            client.close();
                        }).catch()
                } else {
                    client.close();
                }
            })
    })
}

async function mongoInsert(dataGroup) {
    let count = 0;
    for await (const x of dataGroup) {
        const num = await insertToDb(x);
        count += num;
    }
    return count;
}

async function f( dirPath ) {
    const nameArray = await getName(dirPath);
    const unit = await csv2json(dirPath, nameArray);
    for await (const x of unit) {
        await dataProcess(x.arr);
    }
    return await mongoInsert(unit);
}

f(dirPath).then(console.log).catch(console.error);