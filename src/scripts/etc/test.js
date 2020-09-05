const MongoClient = require("mongodb");

const mongoUrl = "mongodb://127.0.0.1:27017";
const mongoOpt = { useUnifiedTopology: true }

MongoClient.connect(mongoUrl,mongoOpt)
.then(client => {
    const where = {
        type: "eventPool",
        code: 1,
    }
    const updateData = {
        $set:{
            "url": "/eventPool/the_glory_of_sliverash"
        }
    }
    client.db("Arknights")
        .collection("poolList")
        .find(where)
        .toArray((err,res) => {
            if(err) throw err;
            console.log(res);
            client.close();
        })
})