const MongoClient = require("mongodb");

MongoClient.connect("mongodb://localhost:27017", {useNewUrlParser: true}, (err,client) => {
    if(err) throw err;
    const data = {
        rare: 5,
    }
    const targetDB =  client.db("Arknights");
    targetDB.collection("不羁逆流").find(data).toArray((err,result) => {
        if(err) throw err;
        console.log(result.length);
        result.forEach(x => {
            //console.log(x.Codename_cn);
        })
    })
    client.close().catch(err => console.log(err));
})