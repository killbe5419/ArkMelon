const MongoClient = require("mongodb");

MongoClient.connect("mongodb://localhost:27017", {useNewUrlParser: true}, (err,client) => {
    if(err) throw err;
    const data = {
        name: "森蚺",
    }
    const targetDB =  client.db("Arknights");
    targetDB.collection("燃钢之心 暴躁铁皮").find(data).toArray((err,result) => {
        if(err) throw err;
        console.log(result.length);

    })
    client.close().catch(err => console.log(err));
})