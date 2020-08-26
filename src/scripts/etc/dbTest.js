const MongoClient = require("mongodb");

MongoClient.connect("mongodb://localhost:27017", {useNewUrlParser: true}, (err,client) => {
    if(err) throw err;
    const data = {
        pickup:true,
    }
    const targetDB =  client.db("Arknights");
    targetDB.collection("流沙涡旋").find(data).toArray((err,result) => {
        if(err) throw err;
        console.log(result.length);
        result.forEach(x => {
            console.log(x.name);
        })
    })
    client.close().catch(err => console.log(err));
})